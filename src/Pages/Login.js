import React from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const goHome = () => {
    navigate("Home");
  };
  async function handleAuth(data) {
    let promise = new Promise((resolve, reject) => {
      if (data.password === "admin" && data.login === "admin") {
        setTimeout(() => resolve({ token: "secret-string" }), 2000);
      } else {
        setTimeout(() => reject("Ошибка"), 2000);
      }
    });
    try {
      let result = await promise;
      console.log(result);
      /* if ((data.checkbox = true)) {
        localStorage.setItem("name", "value");
      }*/
      // console.log(data.checkbox);
      // localStorage.setItem();
      goHome();
    } catch (error) {
      console.log(error);
    }
    /*console.log(promise);*/
  }
  return (
    <div>
      <h1>Авторизация</h1>
      <Form
        onSubmit={handleAuth}
        config={[
          {
            type: "text",
            label: "Login",
            placeholder: "Enter login",
            required: "required",
            name: "login",
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter password",
            required: "required",
            name: "password",
          },
          {
            type: "checkbox",
            label: "Remember me",
            defaultValue: false,
            name: "checkbox",
          },
        ]}
      />
    </div>
  );
};

export default Login;
