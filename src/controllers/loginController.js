const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { status, response } = await loginService.login(email, password);
  return res.status(status).json(response);
};

module.exports = {
  login,
};