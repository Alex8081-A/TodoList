import React, { useRef } from "react";
import FormItem from "../FormItem/FormItem";
import { serializeForm } from "../../utils/utils";
import form from "./form.scss";
const renderItems = (config) =>
  config.map((item, index) => <FormItem {...item} key={index} />);

const Form = (props) => {
  const ref = useRef(null);

  const handleForm = (event) => {
    event.preventDefault();
    const data = serializeForm(ref.current);
    props.onSubmit(data);
  };

  return (
    <form id="form" ref={ref} onSubmit={handleForm}>
      {[...renderItems(props.config)]}
      <button type="submit" className="sub_btn">
        Отправить
      </button>
    </form>
  );
};

export default Form;
