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

module.exports = {
  addUser,
  getUsers,
};
