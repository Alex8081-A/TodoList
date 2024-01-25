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
    if (isLogin || localStorage.getItem("token") === "secret-string") {
      navigate(-1);
    }
  }, []);
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.login.loading);
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = async (data) => {
    const request = async () => {
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
          console.log(response.data.token);
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
          setIsAuth(true);
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
    };
    request();
  };
  if (isLogin) {
    // goToCurrenPage();
  } else {
    return (
      <>
        <div>
          <h1 className={login.h1}>Login</h1>
          {isAuth ? <p>Успешная авторизация</p> : undefined}
          {isLoading ? <Spinner /> : undefined}
          <Form
            onSubmit={handleAuth}
            config={[
              {
                type: "text",
                placeholder: "Enter login",
                required: "required",
                name: "login",
              },
              {
                type: "password",
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
