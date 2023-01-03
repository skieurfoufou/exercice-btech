import React from "react";
import "./Users.css";

function Users({ users }) {
  return (
    <div>
      <ul className="ulContainer">
        {users.map((user, index) => {
          return (
            <li key={index} className="liContainer">
              {user.name} / {user.age} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
