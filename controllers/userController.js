const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secrete = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.createUser(displayName, email, password, image);

  if (user.code) return next(user);

  const token = jwt.sign(user, secrete, jwtConfig);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res, _next) => {
  const allUsers = await userService.getAllUsers();

  return res.status(200).json(allUsers);
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await userService.getUser(id);

  if (user.code) return next(user);

  return res.status(200).json(user);
};

module.exports = { createUser, getAllUsers, getUser };