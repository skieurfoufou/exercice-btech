import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { createUser } from "./Api/user.api";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let user = { name, age };
    console.log(user);
    createUser(user);
    setName("");
    setAge("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-bonjour">Hello</div>
      <div>
        <InputField
          name="What's your name ?"
          state={name}
          setState={setName}
        ></InputField>
        <br></br>
        <InputField
          name="What's your age ?"
          state={age}
          setState={setAge}
        ></InputField>
        <br></br>
        <button className="App-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <h2>
        You are {name} and you are {age} years old
      </h2>
    </div>
  );
}

export default App;
