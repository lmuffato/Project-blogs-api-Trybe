require('dotenv').config();

const { sign } = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (data) => {
  const newUser = await User.create(data);
  const token = sign({ data: newUser }, JWT_SECRET, jwtConfig);
  return { token };
};

module.exports = {
  create,
};