const userService = require('../services/userService');

const createUser = async (req, res) => {
  const data = req.body;
  const { message, statusCode } = await userService.createUser(data);
  if (message) return res.status(statusCode).json({ message });
};

module.exports = {
  createUser,
};
