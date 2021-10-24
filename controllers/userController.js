const Users = require('../services/userService.js');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await Users.createUser({ displayName, email, password, image });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json({ token: result.token });
};

const userGetAll = async (_req, res) => {
  const result = await Users.UserGetAll();
  if (result.message) return res.status(result.status).json(result.message);

  res.status(result.status).json(result.users);
};

const UserGetById = async (req, res) => {
  const { id } = req.params;
  const result = await Users.UserGetById(id);
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json(result.user);
};

module.exports = {
  createUser,
  userGetAll,
  UserGetById,
};