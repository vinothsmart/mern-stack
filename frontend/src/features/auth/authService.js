import api from "../../app/api";
const API_URL = "api/users";

// register user
const register = async (userData) => {
  const response = api.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
