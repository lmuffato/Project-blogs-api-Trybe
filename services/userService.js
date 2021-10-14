const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv/config');

const secret = process.env.JWT_SECRET;

const getEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const createUser = async ({ displayName, email, password, image }) => {
  const isExist = await getEmail(email);

  if (isExist !== null) {
    return {
    err: { message: 'User already registered' } }; 
}
  const user = await User.create({ displayName, email, password, image });

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  delete user.dataValues.password;

  const token = jwt.sign(user.dataValues, secret, jwtConfig);
  return { token };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (user === null) {
    return {
    err: { message: 'Invalid fields' } };
}

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

delete user.dataValues.password;

const token = jwt.sign(user.dataValues, secret, jwtConfig);

return { token };
};

const getAllUser = async () => {
  const result = await User.findAll({});
  return result;
};

module.exports = {
  createUser,
  getEmail,
  loginUser,
  getAllUser,
};
