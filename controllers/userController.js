const userService = require('../services/userService');

const createUser = async (req, res) => {
  const data = req.body;
  const { status, message } = await userService.createUser(data);
  return res.status(status).json({ message });
};

const getAllUsers = async (_req, res) => {
  const { status, data, message } = await userService.getAllUsers();
  if (message) return res.status(status).json({ message });
  
  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { status, data, message } = await userService.getUserById(req.params.id);
  if (message) return res.status(status).json({ message });
  
  return res.status(status).json(data);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};