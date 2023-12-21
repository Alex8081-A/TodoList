import React from "react";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./Sandbox/Wrapper";
const App = () => {
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token === "secret-string") {
      return true;
    } else return false;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="Home"
          element={
            <Wrapper isAuth={checkToken()}>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path="About"
          element={
            <Wrapper isAuth={checkToken()}>
              <div>adas</div>
            </Wrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
