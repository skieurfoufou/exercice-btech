import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import InputField from "./Components/InputField/InputField";
import UsersList from "./Components/UserList/UsersList";

import { createUser } from "./Api/user.api";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = { name, age };
    console.log(user);
    await createUser(user);

    setName("");
    setAge("");
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="App-hello">Hello</div>
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
      <hr></hr>
      <UsersList></UsersList>
    </div>
  );
}

export default App;
