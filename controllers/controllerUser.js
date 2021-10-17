const serviceUser = require('../services/serviceUser');

const createUser = async (req, res) => {
  const data = req.body;

  const { status, message, data: token } = await serviceUser.createUser(data);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(token);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await serviceUser.getAllUsers();
  return res.status(status).json(data);
};

module.exports = {
  createUser,
  getAllUsers,
};