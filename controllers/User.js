const rescue = require('express-rescue');
const UserService = require('../services/User');
const { User } = require('../models');

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await UserService.create(
    displayName, email, password, image,
  );
  if (newUser.message) {
    return res.status(newUser.code).json({ message: newUser.message });
  }
  await User.create({ displayName, email, password, image });
  res.status(newUser.code).json({ token: newUser.token });
});

const getUser = rescue(async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
});

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  res.status(200).json(user);
});

module.exports = { createUser, getUser, getById };
