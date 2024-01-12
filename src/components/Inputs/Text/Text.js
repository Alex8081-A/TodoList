import React, { useState } from "react";
import text from "./text.css";
const Text = (props) => {
  const [text, setText] = useState(props.defaultValue);

  return (
    <div>
      <input
        required={props.required}
        placeholder={props.placeholder}
        type="text"
        name={props.name}
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="input"
      />
    </div>
  );
};

export default Text;
