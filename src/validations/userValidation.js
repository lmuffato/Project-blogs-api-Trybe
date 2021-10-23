const validator = require('validator');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const invalidDisplayName = {
  status: 400,
  error: {
    message: '"displayName" length must be at least 8 characters long',
  },
};

const emailNotExists = {
  status: 400,
  error: {
    message: '"email" is required',
  },
};

const invalidEmail = {
  status: 400,
  error: {
    message: '"email" must be a valid email',
  },
};

const passwordNotExists = {
  status: 400,
  error: {
    message: '"password" is required',
  },
};

const invalidPassword = {
  status: 400,
  error: {
    message: '"password" length must be 6 characters long',
  },
};

const userAlreadyExists = {
  status: 409,
  error: {
    message: 'User already registered',
  },
};

const tokenNotFound = {
  status: 401,
  error: {
    message: 'Token not found',
  },
};

const tokenInvalid = {
  status: 401,
  error: {
    message: 'Expired or invalid token',
  },
};

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
    throw invalidDisplayName;
  }
};

const validateEmail = (email) => {
  if (!email) {
    throw emailNotExists;
  }
  if (!validator.isEmail(email)) {
    throw invalidEmail;
  }
};

const validatePassword = (password) => {
  if (!password) {
    throw passwordNotExists;
  }
  if (password.length < 6) {
    throw invalidPassword;
  }
};

const validateUserExists = async (email) => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) {
    throw userAlreadyExists;
  }
};

const validateToken = (token) => {
  if (!token) throw tokenNotFound;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw tokenInvalid;
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUserExists,
  validateToken,
};
