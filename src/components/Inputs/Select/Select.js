import React, { useState } from "react";

const Select = (props) => {
  const [value, setValue] = useState(props.placeholder);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const selectOptions = props.options.map((elem, index) => {
    return (
      <option key={index} value={elem.value}>
        {elem.label}
      </option>
    );
  });

  return (
    <div>
      <select
        value={value}
        onChange={handleChange}
        name={props.name}
        placeholder={props.placeholder}
      >
        <option disabled hidden>
          {props.placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};

export default Select;
