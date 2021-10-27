const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userValidation = require('../validations/userValidation');
const postValidation = require('../validations/postValidation');
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

const getUserById = async (id, token) => {
  userValidation.validateToken(token);
  const user = await User.findByPk(id);
  userValidation.validateUser(user);
  delete user.dataValues.password;
  return { status: 200, response: user.dataValues };
};

const deleteUser = async (token) => {
  const id = await postValidation.validateToken(token);
  await User.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
};
