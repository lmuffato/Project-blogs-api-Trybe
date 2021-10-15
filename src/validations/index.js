const { getStatusCode } = require('../utils/statusCode');
const token = require('./token');

function throwError(code, message) {
  const error = new Error(message);
  const { status } = getStatusCode(code);
  error.status = status;

  throw error;
}

function verifyName(displayName) {
  let message = '"displayName" length must be at least 8 characters long';

  if (!displayName) {
    message = '"displayName" is required';
    throwError('badRequest', message);
  }

  if (displayName.length < 8) {
    throwError('badRequest', message);
  }
}

function verifyEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isRegexValid = emailRegex.test(email);
  let message = '"email" must be a valid email';

  if (email === '') {
    message = '"email" is not allowed to be empty';
    throwError('badRequest', message);
  }

  if (!email) {
    message = '"email" is required';
    throwError('badRequest', message);
  }

  if (!isRegexValid) {
    throwError('badRequest', message);
  }
}

function verifyPassword(password) {
  let message = '"password" length must be 6 characters long';

  if (password === '') {
    message = '"password" is not allowed to be empty';
    throwError('badRequest', message);
  }

  if (!password) {
    message = '"password" is required';
    throwError('badRequest', message);
  }

  if (password.length < 6) {
    throwError('badRequest', message);
  }
}

function isUserRegistered(condition) {
  const message = 'User already registered';
  if (!condition) {
    throwError('conflict', message);
  }
}

function isUserValid(condition) {
  const message = 'Invalid fields';
  if (!condition) {
    throwError('badRequest', message);
  }
}

module.exports = {
  verifyName,
  verifyEmail,
  verifyPassword,
  isUserRegistered,
  isUserValid,
  ...token,
};
