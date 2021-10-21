const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const getAll = async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  
  const user = await User.findByPk(id);
  if (user === null) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user.dataValues);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = { displayName, email, password, image };
  await User.create(newUser);

  const token = jwt.sign({ newUser }, SECRET);
  return res.status(201).json({ token });
};

module.exports = {
  create,
  getAll,
  getById,
};
