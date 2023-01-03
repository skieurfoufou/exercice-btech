import axios from "axios";
import env from "../config/env";

export const createUser = async (newUser) => {
  try {
    // const url = "http://localhost:8080/users";
    const url = `${env.SERVER_URL}/users`;
    const res = await axios.post(url, newUser);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

export const getAllUsers = async () => {
  try {
    const url = "http://localhost:8080/users";
    // const url = `${env.SERVER_URL}/users`;
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
