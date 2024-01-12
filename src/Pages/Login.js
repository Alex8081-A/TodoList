import React, { useState } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import axios from "axios";
import { begin, errorr, success } from "../store/loginSlice";
import login from "./login.css";
import { useLocation } from "react-router-dom";
const Login = () => {
  const isLogin = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.login.loading);
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  /*const goToCurrentPage = () => {
    navigate(location.pathname);
  };*/
  const goHome = () => {
    navigate("Home");
  };
  if (isLogin) {
    goHome();
  }
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
          {isLoading ? <p>Загрузка</p> : undefined}
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
