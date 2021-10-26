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

const getOne = async (req, res) => {
  const { id } = req.params;
  const oneUser = await user.getOne(id);
  return res.status(oneUser.status).json(oneUser.message);
};

module.exports = { create, getAll, getOne };
