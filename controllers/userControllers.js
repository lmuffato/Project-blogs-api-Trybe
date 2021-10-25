const userService = require('../services/userService');

const addUser = async (req, res) => {
  const { status, response } = await userService.addUsers(req.body);
  return res.status(status).json(response);
};

const getUsers = async (req, res) => {
  const token = req.headers.authorization;
  console.log('token ', token);
  const { status, response } = await userService.getUsers(token);
  return res.status(status).json(response);
};

const getUserById = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { status, response } = await userService.getUserById(token, id);
  return res.status(status).json(response);
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
};