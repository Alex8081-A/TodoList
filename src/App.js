import React, { useState } from "react";
import Login from "./Pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import PrivateRoute from "./Sandbox/PrivateRoute";
import { useAuth } from "./utils/userAuth";
import Spinner from "./Spinner";
import Modall from "./Pages/Modall";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    console.log("app.js render");
  }, []);
  const [open, setOpen] = useState(false);
  const auth = useAuth();
  if (auth.isAuth === undefined) {
    return <Spinner />;
  }
  return (
    <div>
      <Modall open={open} onClose={() => setOpen(false)}>
        Portal
      </Modall>
      <button onClick={() => setOpen(true)}>Открыть модалку</button>
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
