const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await userService.create({ displayName, email, password, image });

  if (newUser.message) return res.status(newUser.code).json({ message: newUser.message });

  return res.status(newUser.code).json({ token: newUser.token });
};

module.exports = {
  create,
};