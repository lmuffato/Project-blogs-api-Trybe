const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secrete = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const user = await userService.createUser(displayName, email, password, image);

  if (user.code) return next(user);

  const token = jwt.sign(user, secrete, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = { createUser };