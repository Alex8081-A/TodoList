import React from "react";
import { Modal } from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigateHome = useNavigate();
  const goToLogin = () => {
    navigateHome("/");
  };
  const deleteToken = () => {
    localStorage.removeItem("token");
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
