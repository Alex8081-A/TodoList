import React, { useState } from "react";
import checkbox from "./checkbox.module.scss";
const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.defaultValue);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        name={props.name}
        onChange={() => setChecked(!checked)}
        className={checkbox.checkbox}
      />
    </div>
  );
};

export default Checkbox;
