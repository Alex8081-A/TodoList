import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";
import { begin, errorr, success } from "../store/loginSlice";

const Login = () => {
  /*const isLoading = useSelector((state) => state.user);
  console.log(isLoading);*/
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const goHome = () => {
    navigate("Home");
  };
  const getTokenn = localStorage.getItem("token");
  if (getTokenn === "secret-string") {
    goHome();
  }
  const [auth, setAuth] = useState(false);
  const change = () => {
    setAuth(true);
  };
  async function handleAuth(data) {
    async function request() {
      dispatch(
        begin({
          loading: true,
          error: null,
          data: null,
        })
      );
      const test = axios.post(
        "https://json-placeholder.mock.beeceptor.com/login",
        { data }
      );
      test.then((response) => {
        console.log("response:", response);
        dispatch(
          success({
            loading: false,
            error: null,
            data: response.data,
          })
        );
      });
      test.catch((error) => {
        console.log("error:", error);
        dispatch(
          errorr({
            loading: false,
            error: true,
            data: null,
          })
        );
      });
    }
    request();
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
      dispatch(
        setUser({
          isAuth: true,
        })
      );
      goHome();
    } catch (error) {
      console.log(error);
    }
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
