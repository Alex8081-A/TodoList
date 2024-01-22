import React, { useState } from "react";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Sandbox/PrivateRoute";
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
            <PrivateRoute isAuth={auth.isAuth}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="About"
          element={
            <PrivateRoute isAuth={auth.isAuth}>
              <div>About</div>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
