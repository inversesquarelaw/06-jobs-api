const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  // use destructuring to extract name, email, and password from req.body
  const { name, email, password } = req.body;

  // validate user input includes name, email, and password
  /*
  if (!name || !email || !password) {
    throw new BadRequestError("Please provide name, email, and password");
  }
  */

  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });

  //res.send("register user");
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
