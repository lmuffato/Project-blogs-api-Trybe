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

module.exports = {
  createUser,
  userLogin,
};
