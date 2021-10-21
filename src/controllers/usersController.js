const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const getAll = async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users);
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
};
