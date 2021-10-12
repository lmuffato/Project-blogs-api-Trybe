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

module.exports = { createUser };
