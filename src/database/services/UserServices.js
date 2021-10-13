const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'segredo_mais_secreto';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createUser = async (userData) => {
  const { email } = userData;

  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    return {
      error: {
        code: 'conflict',
        message: 'User already registered',
      },
    };
  }

  await User.create(userData);

  const token = jwt.sign({ data: userData }, SECRET, jwtConfig);

  return token;
};

module.exports = {
  createUser,
};