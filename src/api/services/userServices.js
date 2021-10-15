require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
};

const {
  HTTP_CONFLICT,
  HTTP_CREATED,
  HTTP_OK_STATUS,
  HTTP_NOT_FOUND,
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

const readAllServices = async () => {
  const allUsers = await User.findAll();

  return { code: HTTP_OK_STATUS, allUsers };
};

const readByIdServices = async (id) => {
  const user = await User.findByPk(id);

  if (!user) {
    return {
      notFound: true,
      code: HTTP_NOT_FOUND,
      message: 'User does not exist',
    };
  }

  return {
    found: true,
    code: HTTP_OK_STATUS,
    user,
  };
};

module.exports = {
  createServices,
  readAllServices,
  readByIdServices,
};