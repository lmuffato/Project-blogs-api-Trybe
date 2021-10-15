const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message, token } = await userService.create(displayName, email, password, image);
  if (!token) return res.status(status).json({ message });
  res.status(status).json({ token });
};

module.exports = {
  create,
};