const { loginService } = require('../services/login');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { status, data, message } = await loginService(email, password);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  loginController,
};
