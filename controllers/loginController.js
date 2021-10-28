const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginService.login({ email, password });

  if (token.message) return res.status(token.code).json({ message: token.message });

  return res.status(token.code).json({ token: token.token });
};

module.exports = {
  login,
};
