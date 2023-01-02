import React from "react";
import "./InputField.css";

function InputField({ name, state, setState }) {
  const handleInput = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="inputField-container">
      <label className="label">{name}</label>
      <input
        className="input"
        type="text"
        value={state}
        onChange={handleInput}
      ></input>
    </div>
  );
}

export default InputField;
