const rescue = require('express-rescue');
const userService = require('../services/userService');

const createUser = rescue(async (req, res, next) => {
  const newUser = await userService.createUser(req.body);

  if (newUser.code) return next(newUser);

  res.status(201).json({ token: newUser });
});

const getAll = async (req, res) => {
  const users = await userService.getAll();
  // console.log(req.user);

  res.status(200).json(users);
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.findById(id);

  if (user.code) return next(user);

  res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const { email } = req.user;

  await userService.deleteUser(email);

  res.status(204).end();
};

module.exports = {
  createUser,
  getAll,
  findById,
  deleteUser,
};