const userService = require('../services/userService');

const createUser = async (req, res) => {
  const data = req.body;
  const { message, statusCode } = await userService.createUser(data);
  return res.status(statusCode).json({ message });
};

const userLogin = async (req, res) => {
  const data = req.body;
  const { message, statusCode, token } = await userService.userLogin(data);
  return res.status(statusCode).json(message ? { message } : { token });
};

const getAll = async (_req, res) => {
  const { message, statusCode, users } = await userService.getAll();
  return res.status(statusCode).json(message ? { message } : (users));
};

module.exports = {
  createUser,
  userLogin,
  getAll,
};
