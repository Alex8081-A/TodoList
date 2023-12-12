import React from "react";
import Form from "../components/Form/Form";

const Login = () => {
  let promise = new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve("Успех"), 2000);
    } else {
      setTimeout(() => reject("Ошибка"), 2000);
    }
  });

  console.log(promise);

  const handleAuth = () => {};

  return (
    <div>
      <h1>Авторизация</h1>
      <Form
        onSubmit={handleAuth}
        config={[
          {
            type: "text",
            label: "login",
            placeholder: "Enter login",
            required: "required",
            name: "login",
          },
          {
            type: "password",
            label: "password",
            placeholder: "Enter password",
            required: "required",
            name: "password",
          },
          {
            type: "checkbox",
            label: "test",
            defaultValue: false,
            name: "checkbox",
          },
        ]}
      />
    </div>
  );
};

export default Login;
