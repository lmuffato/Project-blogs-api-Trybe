const { sign } = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv/config');

const { SECRET } = process.env;

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const createUser = async (data) => {
  const newUser = await Users.create(data);
  const { email, image, displayName } = newUser;
  const token = sign({ data: email, image, displayName }, SECRET, jwtConfig);
  return { token };
};

module.exports = {
  createUser,
};