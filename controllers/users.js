const { User } = require('../models');

const getAll = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.create({ displayName, email, password, image });
  res.status(201).json(user);
};

module.exports = {
  getAll,
  create,
};
