const UserService = require('../services/UserService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { token, code, message } = await 
  UserService.createUser(displayName, email, password, image);
  if (message) return res.status(code).json({ message });

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};