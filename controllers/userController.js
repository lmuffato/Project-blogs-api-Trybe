const userService = require('../services/userService');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { err, token } = await userService.createUser({ displayName, email, password, image });

  if (err) return res.status(409).json(err);

  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const { err, token } = await userService.loginUser({ email, password });

  if (err) return res.status(400).json(err);

  res.status(200).json({ token });
};

const getAll = async (req, res) => {
  const users = await userService.getAllUser();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { user, err } = await userService.getUserById(id);

  if (err) return res.status(404).json(err);

  res.status(200).json(user);
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};
