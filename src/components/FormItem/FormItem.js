import React from "react";
import Select from "../Inputs/Select/Select";
import Text from "../Inputs/Text/Text";
import Checkbox from "../Inputs/Checkbox/Checkbox";

const FormItem = (props) => {
  let formInput;
  if (props.type === "select")
    formInput = (
      <Select
        defaultValue={props.defaultValue}
        name={props.name}
        placeholder={props.placeholder}
        options={props.options}
      />
    );
  if (props.type === "text")
    formInput = (
      <Text
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        required={props.required}
        name={props.name}
      />
    );
  if (props.type === "checkbox")
    formInput = (
      <Checkbox defaultValue={props.defaultValue} name={props.name} />
    );

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      {props.label ? <label>{props.label}</label> : undefined}
      {formInput}
    </div>
  );
};

export default FormItem;
