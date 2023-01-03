const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  res.json({ message: "Register111111111 User" });
});

// @desc Authenticate user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login User" });
});

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getUserData = asyncHandler(async (req, res) => {
  res.json({ message: "Get User Data" });
});

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
