const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.create({ displayName, email, password, image });

  if (newUser.message) return res.status(newUser.code).json({ message: newUser.message });

  return res.status(newUser.code).json({ token: newUser.token });
};

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

module.exports = {
  create,
  getUsers,
};