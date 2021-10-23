const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userValidation = require('../validations/userValidation');
require('dotenv').config();

const jwtConfig = {
  algorithm: 'HS256',
};

const addUser = async (displayName, email, password, image) => {
  userValidation.validateDisplayName(displayName);
  userValidation.validateEmail(email);
  userValidation.validatePassword(password);
  await userValidation.validateUserExists(email);
  await User.create({ displayName, email, password, image });
  const token = jwt.sign({ email }, process.env.JWT_SECRET, jwtConfig);
  return { status: 201, response: { token } };
};

const getUsers = async (token) => {
  userValidation.validateToken(token);
  const users = await User.findAll();
  return { status: 200, response: users };
};

module.exports = {
  addUser,
  getUsers,
};
