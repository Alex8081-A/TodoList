import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";
import { begin, errorr, success } from "../store/loginSlice";
import login from "./login.scss";
import Spinner from "../Spinner";
const Login = () => {
  const isLogin = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.login.loading);
  const currenUrl = useSelector((state) => state.url.url);
  console.log(currenUrl);
  console.log(isLogin);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  /*const goToCurrenPage = () => {
    navigate(currenUrl);
  };*/
  const goHome = () => {
    navigate("Home");
  };
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
          if (data.checkbox === true) {
            localStorage.setItem("token", "secret-string");
          }
          setAuth(true);
          dispatch(
            setUser({
              isAuth: true,
            })
          );
          goHome();
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
    goHome();
  } else {
    return (
      <>
        <div>
          <h1 className="h1">Login</h1>
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
