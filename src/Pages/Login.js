import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const goHome = () => {
    navigate("Home");
  };
  const [auth, setAuth] = useState(false);
  const change = () => {
    setAuth(true);
  };
  async function handleAuth(data) {
    let promise = new Promise((resolve, reject) => {
      if (data.password === "admin" && data.login === "admin") {
        setTimeout(() => resolve({ token: "secret-string" }), 2000);
        change();
      } else {
        setTimeout(() => reject("Ошибка"), 2000);
      }
      if (data.checkbox === true) {
        localStorage.setItem("token", "secret-string");
      }
    });
    try {
      let result = await promise;
      console.log(result);
      goHome();
    } catch (error) {
      console.log(error);
    }
    // console.log(promise);
  }
  return (
    <div>
      <h1>Авторизация</h1>
      {auth ? <p>Успешная авторизация</p> : undefined}
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
