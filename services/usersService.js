const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (userWithoutPassword) => {
  const token = jwt.sign(userWithoutPassword, SECRET, jwtConfig);
  return { token };
};

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: pass, ...userWithoutPassword } = user;

  return createToken(userWithoutPassword);
};

module.exports = {
  createUser,
};
