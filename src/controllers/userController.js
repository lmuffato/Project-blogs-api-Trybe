const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message, token } = await userService.create(displayName, email, password, image);
  if (!token) return res.status(status).json({ message });
  res.status(status).json({ token });
};

const findByCredentials = async (req, res) => {
  const { email, password } = req.body;

  const { status, message, token } = await userService.findByCredentials(email, password);
  if (!token) return res.status(status).json({ message });
  res.status(status).json({ token });
};

const getAll = async (_req, res) => {
  const { status, message, users } = await userService.getAll();
  if (!users) return res.status(status).json({ message });
  res.status(status).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { status, message, user } = await userService.getById(id);
  if (!user) return res.status(status).json({ message });
  res.status(status).json(user);
};

module.exports = {
  create,
  findByCredentials,
  getAll,
  getById,
};