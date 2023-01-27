import axios from "axios";

console.log(process.env);

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5033",
});

export default api;
