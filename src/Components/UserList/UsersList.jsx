import React, { useState, useEffect } from "react";
import "./UsersList.css";
import * as usersApi from "../../Api/user.api";
import Spinner from "../Spinner/Spinner";
import Users from "../Users/Users";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadAllUsers = async () => {
    setIsLoading(true);
    try {
      const response = await usersApi.getAllUsers();
      const sortedRes = response.sort((a, b) => (a.name < b.name ? -1 : 1));
      console.log(sortedRes);
      setUsers(sortedRes);
      console.log(users);
    } catch (error) {
      if (error.response.status === 404) {
        setUsers([]);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <div className="usersList-container">
      <div className="usersList-title">Users-List</div>
      {!isLoading && users.length > 0 && <Users users={users} />}
      {!isLoading && users.length === 0 && <p>There is no users!</p>}
      {isLoading && <Spinner />}
    </div>
  );
}

export default UsersList;
