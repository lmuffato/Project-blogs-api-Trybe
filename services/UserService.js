const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const createUser = async (data) => {
  const { email } = data;

  const findUser = await User.findOne({ where: { email } });
  if (findUser) return { status: 409, message: 'User already registered' };

  await User.create(data);
  
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const userPayload = { email };
  const token = jwt.sign(userPayload, secret, jwtConfig);

  return { status: 201, token };
};

const userLogin = async (data) => {
  const { email } = data;
  const findUser = await User.findOne({ where: { email } });
  if (findUser === null) return { status: 400, message: 'Invalid fields' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const userPayload = { email };
  const token = jwt.sign(userPayload, secret, jwtConfig);

  return { status: 200, token };
};

module.exports = {
  createUser,
  userLogin,
};
