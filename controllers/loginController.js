const Login = require('../services/loginService');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await Login.loginUser({ email, password });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json({ token: result.token });
};

module.exports = {
  loginUser,
};