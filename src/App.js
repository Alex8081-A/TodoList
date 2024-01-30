import React, { useState } from "react";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Sandbox/PrivateRoute";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { chekToken } from "./utils/utils";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (chekToken()) {
      dispatch(
        setUser({
          isAuth: true,
        })
      );
    } else {
      dispatch(
        setUser({
          isAuth: false,
        })
      );
    }
  }, []);
  const auth = useSelector((state) => state.user);
  if (auth.initialize === false) {
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
