const { login } = require('../services/loginService');
const { STATUS_OK } = require('../utils/msg');

const loginController = async (req, res) => {
  const user = req.body;
  const token = await login(user);
  return res.status(STATUS_OK).json(token);
};

module.exports = { loginController };