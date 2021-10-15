require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
};

const {
  HTTP_CONFLICT,
  HTTP_CREATED,
} = require('../status');

const { User } = require('../models');

const createServices = async ({ displayName, email, password, image }) => {
  const emailFound = await User.findOne({ where: { email } });

  if (emailFound) {
    return {
      found: true,
      code: HTTP_CONFLICT,
      message: 'User already registered',
    };
  }

  await User.create({ displayName, email, password, image });

  const payload = { displayName, email };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return {
    found: false,
    code: HTTP_CREATED,
    token,
  };
};

module.exports = {
  createServices,
};