import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const navigateHome = useNavigate();
  const dispatch = useDispatch();
  const deleteToken = () => {
    localStorage.removeItem("token");
    dispatch(
      setUser({
        isAuth: false,
      })
    );
    navigateHome("/");
  };

  return (
    <div>
      <h1>Home</h1>
      <br />
      <button onClick={deleteToken}>Выход</button>
    </div>
  );
};

export default Home;
