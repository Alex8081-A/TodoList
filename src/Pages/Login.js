import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import login from "./login.module.scss";
import Spinner from "../Spinner";
const Login = () => {
  useEffect(() => {
    if (isLogin) {
      navigate(-1);
    }
  }, []);

  const isLogin = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.login.loading);
  let navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  async function handleAuth(data) {
    let promise = new Promise((resolve, reject) => {
      if (data.password === "admin" && data.login === "admin") {
        setTimeout(() => resolve({ token: "secret-string" }), 2000);
      } else {
        setTimeout(() => reject("Ошибка"), 2000);
      }
      if (data.checkbox === true) {
        localStorage.setItem("key", JSON.stringify({ token: "secret-string" }));
      }
      const token = localStorage.setItem("key");
    });
    try {
      let result = await promise;
      console.log(result);
      goHome();
    } catch (error) {
      console.log(error);
    }
  }
  if (isLogin) {
    // goToCurrenPage();
  } else {
    return (
      <>
        <div>
          <h1 className={login.h1}>Login</h1>
          {auth ? <p>Успешная авторизация</p> : undefined}
          {isLoading ? <Spinner /> : undefined}
          <Form
            onSubmit={handleAuth}
            config={[
              {
                type: "text",
                // label: "Login",
                placeholder: "Enter login",
                required: "required",
                name: "login",
              },
              {
                type: "password",
                // label: "Password",
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
      </>
    );
  }
};

export default Login;
