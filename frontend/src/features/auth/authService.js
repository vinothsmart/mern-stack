import axios from "axios";
const API_URL = "api/users";

// register user
const register = async (userData) => {
  const response = axios.post(API_URL + "/register", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
