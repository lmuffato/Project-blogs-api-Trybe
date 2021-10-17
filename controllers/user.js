const services = require('../services/user');

const createUser = async (req, res, next) => {
  const response = await services.createUser(req.body);

  if (response.code) return next(response);

  return res.status(201).json(response);
};

const getAllUsers = async (req, res) => {
  const response = await services.getAllUsers();

  return res.status(200).json(response);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const response = await services.getUserById(id);

  if (response.code) return next(response);

  return res.status(200).json(response);
};

const deleteUser = async (req, res) => {
  const { id: userId } = req.user;
  await services.deleteUser(userId);
  return res.status(204).json({});
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
