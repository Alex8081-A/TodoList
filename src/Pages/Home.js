import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const title = document.location.pathname;
  console.log(title);
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

  const [modalIsOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setModalOpen(true)}>Открыть модальное окно</button>
      <Modal isOpen={modalIsOpen} onClose={() => setModalOpen(false)}>
        <h2>Модальное окно</h2>
        <p>Какой-то текст</p>
      </Modal>
      <br />
      <button onClick={deleteToken}>Выход</button>
    </div>
  );
};

export default Home;
