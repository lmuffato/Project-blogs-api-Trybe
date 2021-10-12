const jwt = require('jsonwebtoken');

const UserModel = require('../models/User');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'opedopedroehpreto';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const verifyDisplayName = (displayName) => {
  if (displayName === null || displayName.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long',
    };
  }
};

const verifyEmail = (email) => {
  if (email === null) {
    return {
      message: '"email" is required',
    };
  }
  const regexEmailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmailFormat.test(email)) {
    return {
      message: '"email" must be a valid email',
    };
  }
};

const verifyEmailAvaliability = async (email) => {
  const isEmailAvaliable = await UserModel.findOne({ where: { email } });
  if (!isEmailAvaliable) {
    return {
      message: 'User already registered',
    };
  }
};

const verifyPassword = (password) => {
  if (password === null) {
    return {
      message: '"password" is required',
    };
  }
  if (password.length < 6) {
    return {
      message: '"password" length must be at least 6 characters long',
    };
  }
};

const verifyRequiredFilds = (displayName, email, password) => {
  const isDisplayNameValid = verifyDisplayName(displayName);
  if (!isDisplayNameValid) { return { message: isDisplayNameValid.message }; }
  const isEmailValid = verifyEmail(email);
  if (!isEmailValid) { return { message: isEmailValid.message }; }
  const isPasswordValid = verifyPassword(password);
  if (!isPasswordValid) { return { message: isPasswordValid.message }; }
};

const validateNewUser = async (displayName, email, password) => {
  const isRequiredFieldFilled = verifyRequiredFilds(displayName, email, password);
  if (!isRequiredFieldFilled) {
    return { message: isRequiredFieldFilled.message, codeError: 'wrong request format' };
  }
  const isEmailAvaliable = await verifyEmailAvaliability(email);
  if (!isEmailAvaliable) {
    return { message: isEmailAvaliable.message, codeError: 'conflict detected' };
  }
};

const generateToken = (id, displayName, email) => {
  const user = { id, displayName, email };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

const create = async (displayName, email, password, image) => {
  const isAllowedToCreate = await validateNewUser(displayName, email, password);
  if (!isAllowedToCreate) {
    return { message: isAllowedToCreate.message, codeError: isAllowedToCreate.codeError };
  }
  try {
    const { id } = await UserModel.create({ displayName, email, password, image });
    const token = generateToken(id, displayName, email);
    return { token };
  } catch (e) {
    console.log(e.message);
    return {
      message: e.message,
      codeError: 'Internal Server Error',
    };
  }
};

module.exports = {
  create,
};