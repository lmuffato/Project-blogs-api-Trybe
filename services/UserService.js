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
  if (!findUser) return { status: 400, message: 'Invalid fields' };

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const userPayload = { email };
  const token = jwt.sign(userPayload, secret, jwtConfig);

  return { status: 200, token };
};

const getUsers = async () => {
  const users = await User.findAll();
  return { status: 200, data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, message: 'User does not exist' };
  return { status: 200, data: user };
};

const deleteMe = async (email) => {
  await User.destroy({ where: { email } });
  return { status: 204 };
};

module.exports = {
  createUser,
  userLogin,
  getUsers,
  getUserById,
  deleteMe,
};
