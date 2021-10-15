require('dotenv').config();

const { sign } = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (data) => {
  const createdUser = await User.create(data);
  const token = sign({ data: createdUser }, JWT_SECRET, jwtConfig);
  return { token };
};

const listAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = { create, listAllUsers, getUserById }; 