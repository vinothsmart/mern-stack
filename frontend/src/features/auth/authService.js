import api from "../../app/api";
const API_URL = "api/users";

// register user
const register = async (userData) => {
  const response = await api.post(API_URL, userData);
  if (response.data) {
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
