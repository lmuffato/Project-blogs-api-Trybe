const users = require('../services/usersService');
const { STATUS_CREATED, STATUS_OK } = require('../utils/msg');

const createUser = async (req, res) => {
  const newUser = req.body;
  const user = await users.createUser(newUser);
  return res.status(STATUS_CREATED).json(user);
};

const getAllUsers = async (_req, res) => {
  const user = await users.getAllUsers();
  return res.status(STATUS_OK).json(user);
};

module.exports = { createUser, getAllUsers };