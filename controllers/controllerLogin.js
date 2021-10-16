const serviceUser = require('../services/serviceUser');

const loginUser = async (req, res) => {
  const data = req.body;

  const { status, message, data: token } = await serviceUser.loginUser(data);
  if (message) return res.status(status).json({ message });

  return res.status(status).json(token);
};

module.exports = {
  loginUser,
};