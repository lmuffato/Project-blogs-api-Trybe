const { loginService } = require('../services/login');

const loginController = async (req, res) => {
  const { status, data, message } = await loginService(req.body);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  loginController,
};
