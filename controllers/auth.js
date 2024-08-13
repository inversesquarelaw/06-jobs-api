const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // use destructuring to extract name, email, and password from req.body
  /*
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  */

  // we handle the salt and hash in the model using a pre-save hook
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userId: user._id, name: user.name }, "jwtSecret", {
    expiresIn: "30d",
  });

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });

  //res.send("register user");
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
