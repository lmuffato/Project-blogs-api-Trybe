const loginService = require('../services/loginService');

const userLogin = async (req, res) => {
  const data = req.body;
  const { status, message, token } = await loginService.userLogin(data);
  return res.status(status).json(message ? { message } : { token });
};

module.exports = { userLogin };