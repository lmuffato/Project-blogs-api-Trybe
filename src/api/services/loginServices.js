require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
};

const {
  HTTP_BAD_REQUEST,
  HTTP_OK_STATUS,
} = require('../status');

const { User } = require('../models');

const loginServices = async ({ email, password }) => {
  const foundData = await User.findOne({ where: { email, password } });

  if (!foundData) {
    return {
      notFound: true,
      code: HTTP_BAD_REQUEST,
      message: 'Invalid fields',
    };
  }

  const { id, displayName, email: emailUser } = foundData;

  const payload = { id, displayName, emailUser };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return {
    found: true,
    code: HTTP_OK_STATUS,
    token,
  };
};

module.exports = { loginServices };