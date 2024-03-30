import axios from "axios";

//data completa
export const getUsers = async () => {
  let res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

//data por id (user)
export const getUserId = async (id) => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};
