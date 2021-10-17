const serviceUser = require('../services/serviceUser');

const createUser = async (req, res) => {
  const dataBody = req.body;
  const { status, data } = await serviceUser.createUser(dataBody);
  return res.status(status).json(data);
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await serviceUser.getAllUsers();
  res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await serviceUser.getUserById(id);
  res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};