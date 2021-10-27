const userService = require('../services/userService');

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, response } = await userService.addUser(displayName, email, password, image);
  return res.status(status).json(response);
};

const getUsers = async (req, res) => {
  const { authorization: token } = req.headers;
  const { status, response } = await userService.getUsers(token);
  return res.status(status).json(response);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;
  const { status, response } = await userService.getUserById(id, token);
  return res.status(status).json(response);
};

const deleteUser = async (req, res) => {
  const { authorization: token } = req.headers;
  const { status } = await userService.deleteUser(token);
  console.log(status);
  return res.status(status).end();
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
};
