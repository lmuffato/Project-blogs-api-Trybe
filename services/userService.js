require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const create = async (userData) => {
  const { displayName, email, password, image } = userData;
  const newUser = await User.create({ displayName, email, password, image });
  return { status: 201, data: newUser };
};

const login = async (user) => {
  const { id, displayName, email } = await User.findOne({ where: { email: user.email } });
  const userPayload = { id, displayName, email };
  const token = jwt.sign(userPayload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d',
  });
  return { status: 200, token };
};

const getAll = async () => {
  const users = await User.findAll();
  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return { status: 404, error: { message: 'User does not exist' } };
  return { status: 200, data: user };
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};