const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.createUser(displayName, email, password, image);

  if (newUser.code) return next(newUser);

  const token = jwt.sign(newUser, secret, jwtConfig);

  return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const allUser = await userService.getAll();

  return res.status(200).json(allUser);
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await userService.getUser(id);
  
  if (user.code) return next(user);

  return res.status(200).json(user);
};

const deleteUser = async (req, res, _next) => {
  const { id } = req.user;

  await userService.deleteUser(id);

  return res.status(204).end();
};

module.exports = { 
  createUser,
  getAll,
  getUser,
  deleteUser,
};
