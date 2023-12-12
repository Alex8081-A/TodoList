import React, { useState } from "react";

const Password = (props) => {
  const [password, setPassword] = useState(props.defaultValue);

  return (
    <div>
      <input
        required={props.required}
        placeholder={props.placeholder}
        type="password"
        name={props.name}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </div>
  );
};

export default Password;
