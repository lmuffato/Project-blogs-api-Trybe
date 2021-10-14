const Users = require('../services/UserService');

const createUser = async (req, res) => {
  const data = req.body;
  const { status, message, token } = await Users.createUser(data);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(token);
};

const userLogin = async (req, res) => {
  const data = req.body;
  const { status, message, token } = await Users.userLogin(data);
  if (message) return res.status(status).json({ message });
  return res.status(status).json({ token });
};

const getUsers = async (_req, res) => {
  const { status, data } = await Users.getUsers();
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message, data } = await Users.getUserById(id);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(data);
};

module.exports = {
  createUser,
  userLogin,
  getUsers,
  getUserById,
};
