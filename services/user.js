const jwt = require('jsonwebtoken');

const { User } = require('../models');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'opedopedroehpreto';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const verifyDisplayName = (displayName) => {
  if (displayName === undefined || displayName.length < 8) {
    return {
      message: '"displayName" length must be at least 8 characters long',
      check: false,
    };
  }
  return { check: true };
};

const verifyEmail = (email) => {
  if (email === undefined) {
    return { message: '"email" is required', check: false };
  }
  if (email === '') {
    return { message: '"email" is not allowed to be empty', check: false };
  }
  const regexEmailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmailFormat.test(email)) {
    return {
      message: '"email" must be a valid email',
      check: false,
    };
  }
  return { check: true };
};

const verifyEmailAvaliability = async (email) => {
  const isEmailAvaliable = await User.findOne({ where: { email } })
    .catch((error) => console.log('DEU RUIMM!!!', error.message));
  console.log(isEmailAvaliable.displayName);
  if (isEmailAvaliable !== null) {
    return {
      message: 'User already registered',
      check: false,
    };
  }
  return { check: true };
};

const verifyPassword = (password) => {
  if (password === undefined) {
    return { message: '"password" is required', check: false };
  }
  if (password === '') {
    return { message: '"password" is not allowed to be empty', check: false };
  }
  if (password.length < 6) {
    return {
      message: '"password" length must be 6 characters long',
      check: false,
    };
  }
  return { check: true };
};

const verifyRequiredFilds = (displayName, email, password) => {
  const isDisplayNameValid = verifyDisplayName(displayName);
  if (!isDisplayNameValid.check) { return { message: isDisplayNameValid.message, check: false }; }
  const isEmailValid = verifyEmail(email);
  if (!isEmailValid.check) { return { message: isEmailValid.message, check: false }; }
  const isPasswordValid = verifyPassword(password);
  if (!isPasswordValid.check) { return { message: isPasswordValid.message, check: false }; }
  return { check: true };
};

const validateNewUser = async (displayName, email, password) => {
  const isRequiredFieldFilled = verifyRequiredFilds(displayName, email, password);
  if (!isRequiredFieldFilled.check) {
    return { 
      message: isRequiredFieldFilled.message,
      codeError: 'wrong request format',
      check: false,
    };
  }
  const isEmailAvaliable = await verifyEmailAvaliability(email);
  if (!isEmailAvaliable.check) {
    return { message: isEmailAvaliable.message, codeError: 'conflict detected', check: false };
  }
  return { check: true };
};

const generateToken = (id, displayName, email) => {
  const user = { id, displayName, email };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

const create = async (displayName, email, password, image) => {
  const isAllowedToCreate = await validateNewUser(displayName, email, password);
  if (!isAllowedToCreate.check) {
    return { message: isAllowedToCreate.message, codeError: isAllowedToCreate.codeError };
  }
  try {
    const { id } = await User.create({ displayName, email, password, image });
    console.log('id retornado do comando create', id);
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

const verifyLoginDataFormat = (email, password) => {
  const isEmailValid = verifyEmail(email);
  const isPasswordValid = verifyPassword(password);
  if (!isEmailValid.check || !isPasswordValid.check) {
    return { 
      codeError: 'wrong request format',
      message: !isEmailValid.chec ? isEmailValid.message : isPasswordValid.message,
      check: false,
    };
  }
  return { check: true };
};

const validateLoginData = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) {
    return { 
      codeError: 'wrong request format',
      message: 'Invalid fields',
      check: false,
    };
  }
  const { id, displayName } = user;
  return {
    id,
    displayName,
    check: true,
  };
};

const askLogin = async (email, password) => {
  const isFormatValid = verifyLoginDataFormat(email, password);
  if (!isFormatValid.check) {
    const { codeError, message } = isFormatValid;
    return { codeError, message };
  }
  const isContentValid = await validateLoginData(email, password);
  if (!isContentValid.check) { 
    const { codeError, message } = isContentValid;
    return { codeError, message };
  }
  const { id, displayName } = isContentValid;
  const token = generateToken(id, displayName, email);
  return { token };
};

module.exports = {
  create,
  askLogin,
};