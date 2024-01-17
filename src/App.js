import React, { useState } from "react";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./Sandbox/Wrapper";
import { useAuth } from "./utils/userAuth";
import Spinner from "./Spinner";

const App = () => {
  const auth = useAuth();
  if (auth.isAuth === undefined) {
    return <Spinner />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="Home"
          element={
            <Wrapper isAuth={auth.isAuth}>
              <Home />
            </Wrapper>
          }
        />
        <Route
          path="About"
          element={
            <Wrapper isAuth={auth.isAuth}>
              <div>About</div>
            </Wrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
