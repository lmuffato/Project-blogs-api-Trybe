require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { SECRET } = process.env;

const create = async (userData) => {
  const { displayName, email, password, image } = userData;
  const newUser = await User.create({ displayName, email, password, image });
  return { status: 201, data: newUser };
};

const login = async (user) => {
  const { id, displayName, email } = await User.findOne({ where: { email: user.email } });
  const userPayload = { id, displayName, email };
  const token = jwt.sign(userPayload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d',
  });
  return { status: 200, token };
};

module.exports = {
  create,
  login,
};