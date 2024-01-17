import React, { useState } from "react";
import Login from "./Pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Wrapper from "./Sandbox/Wrapper";
import { useAuth } from "./utils/userAuth";
import Spinner from "./Spinner";
import Modall from "./Pages/Modall";
const App = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
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
