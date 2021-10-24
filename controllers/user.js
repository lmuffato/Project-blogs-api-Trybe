const { user } = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userCreate = await user.create({ displayName, email, password, image });
  return res.status(userCreate.status).json(userCreate.message);
};

const getAll = async (_req, res) => {
  const users = await user.getAll();
  return res.status(users.status).json(users.message);
};

module.exports = { create, getAll };
