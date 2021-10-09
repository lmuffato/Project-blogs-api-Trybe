const Login = require('../services/login');

const userLogin = async (req, res) => {
  const { status, data, message } = await Login.userLogin(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  userLogin,
};