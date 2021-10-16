const rescue = require('express-rescue');
const LoginService = require('../services/Login');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await LoginService.userLogin(email, password);
  if (loginUser.message) return res.status(loginUser.code).json({ message: loginUser.message });
  res.status(loginUser.code).json({ token: loginUser.token });
});

module.exports = { login };
