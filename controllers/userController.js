const database = require('../models');
const { createToken } = require('../middlewares/createToken');

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const addedUser = await database.Users.create({ displayName, email, password, image });
  const token = createToken(addedUser.id, displayName, email, image);
  return res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const users = await database.Users
    .findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await database.Users
    .findOne({ attributes: ['id', 'displayName', 'email', 'image'], where: { id } });
  return res.status(200).json(user);
};

module.exports = {
  addUser,
  getUser,
  getUserById,
};
