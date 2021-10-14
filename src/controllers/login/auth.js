const LoginService = require('../../services/login');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await LoginService.generateToken({ email, password });

  if (!user.token) return res.status(user.status).json({ message: user.message });

  res.status(user.status).json({ token: user.token });
};