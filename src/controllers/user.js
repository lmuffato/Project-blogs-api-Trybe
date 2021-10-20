const { userServices } = require('../services');
const { status } = require('../messages');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const create = await userServices.createUser({ displayName, email, password, image });
  return res.status(status.created).json(create);
};

const getUsers = async (_req, res) => {
  const users = await userServices.getUsers();
  return res.status(status.OK).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUser(id);
  return res.status(status.OK).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUser,
};
