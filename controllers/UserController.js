const UserService = require('../services/UserService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { token, code, message } = await 
  UserService.createUser(displayName, email, password, image);
  if (message) return res.status(code).json({ message });

  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
 
  const { token, code, message } = await UserService.login(email, password);
  if (message) return res.status(code).json({ message });

  return res.status(200).json({ token });
};

const listUsers = async (req, res) => {
  const list = await UserService.listUsers();
  return res.status(200).json(list);
};

module.exports = {
  createUser,
  login,
  listUsers,
};