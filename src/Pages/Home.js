import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  let navigateHome = useNavigate();
  const goToLogin = () => {
    navigateHome("/");
  };
  const dispatch = useDispatch();
  const deleteToken = () => {
    localStorage.removeItem("token");
    dispatch(
      setUser({
        isAuth: false,
      })
    );
    goToLogin();
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
