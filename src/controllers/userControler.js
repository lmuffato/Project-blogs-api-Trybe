const userService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser(displayName, email, password, image);
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await userService.login(email, password);
  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  login,
};