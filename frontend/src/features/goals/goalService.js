import api from "../../app/api";

const API_URL = "api/goals/";

// Create new goal
const create = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.post(
    API_URL,
    {
      text: goalData,
    },
    config
  );
  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.get(API_URL, config);
  return response.data;
};

// Delete new goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await api.delete(API_URL + goalId, config);
  return response.data;
};

const goalService = {
  create,
  getGoals,
  deleteGoal,
};

export default goalService;
