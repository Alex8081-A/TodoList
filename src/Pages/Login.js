import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";
import { begin, errorr, success } from "../store/loginSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  async function handleAuth(data) {
    async function request() {
      dispatch(
        begin({
          loading: true,
          error: null,
          data: null,
        })
      );
      axios
        .post("https://json-placeholder.mock.beeceptor.com/login", { data })
        .then((response) => {
          console.log("response:", response);
          dispatch(
            success({
              loading: false,
              error: null,
              data: response.data,
            })
          );
          dispatch(
            setUser({
              isAuth: true,
            })
          );
          if (data.checkbox === true) {
            localStorage.setItem("token", "secret-string");
          }
          if (data.checkbox === false) {
            localStorage.setItem("1", "1");
          }
          setAuth(true);

          navigate("Home");
        })
        .catch((error) => {
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
