const jwt = require('jsonwebtoken');
const path = require('path');
const { User } = require('../models');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const secret = process.env.JWT_SECRET;

const getEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

const createUser = async ({ displayName, email, password, image }) => {
  const isExist = await getEmail(email);
  console.log(email, 'service');

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

module.exports = {
  createUser,
  getEmail,
};
