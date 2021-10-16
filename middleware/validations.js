const rescue = require('express-rescue');
const httpStatus = require('./httpCodes');
const { User } = require('../models');

const nameValidate = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const emailIsValid = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const testEmail = emailIsValid.test(email);

  if (!email) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: '"email" is required' });
  }

  if (!testEmail) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"email" must be a valid email',
    });
  }

  return next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"password" is required',
    });
  }

  if (password.length < 6) {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"password" length must be 6 characters long',
    });
  }

  return next();
};

const emailAlreadyExists = rescue(async (req, res, next) => {
  const { email } = req.body;
    const existEmail = await User.findOne({ where: { email } });
    if (existEmail) {
      return res.status(httpStatus.CONFLICT).json({
        message: 'User already registered',
      });
  }

  return next();
});

const empty = (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"email" is not allowed to be empty',
    });
  }

  if (password === '') {
    return res.status(httpStatus.BAD_REQUEST).json({
      message: '"password" is not allowed to be empty',
    });
  }

    return next();
};

const userNotRegistered = rescue(async (req, res, next) => {
  const { email } = req.body;
    const existEmail = await User.findOne({ where: { email } });
    if (!existEmail) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: 'Invalid fields',
      });
  }

  return next();
});

module.exports = {
  nameValidate,
  emailValidate,
  passwordValidate,
  emailAlreadyExists,
  empty,
  userNotRegistered,
};
