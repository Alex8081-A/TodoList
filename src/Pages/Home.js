import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigateHome = useNavigate();
  const goToLogin = () => {
    navigateHome("/");
  };

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
