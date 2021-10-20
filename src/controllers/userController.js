const rescue = require('express-rescue');
const userService = require('../services/userService');

const createUser = rescue(async (req, res, next) => {
  const newUser = await userService.createUser(req.body);

  if (newUser.code) return next(newUser);

  res.status(201).json({ token: newUser });
});

const getAll = async (req, res) => {
  const users = await userService.getAll();
  console.log(req.user);

  res.status(200).json(users);
};

module.exports = {
  createUser,
  getAll,
};