const { getStatusCode } = require('../utils/statusCode');
const { throwError } = require('../utils/error');
const token = require('./token');

function verifyName(displayName) {
  let message = '"displayName" length must be at least 8 characters long';

  if (!displayName) {
    message = '"displayName" is required';
    throwError('badRequest', message, getStatusCode);
  }

  if (displayName.length < 8) {
    throwError('badRequest', message, getStatusCode);
  }
}

function verifyEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isRegexValid = emailRegex.test(email);
  let message = '"email" must be a valid email';

  if (email === '') {
    message = '"email" is not allowed to be empty';
    throwError('badRequest', message, getStatusCode);
  }

  if (!email) {
    message = '"email" is required';
    throwError('badRequest', message, getStatusCode);
  }

  if (!isRegexValid) {
    throwError('badRequest', message, getStatusCode);
  }
}

function verifyPassword(password) {
  let message = '"password" length must be 6 characters long';

  if (password === '') {
    message = '"password" is not allowed to be empty';
    throwError('badRequest', message, getStatusCode);
  }

  if (!password) {
    message = '"password" is required';
    throwError('badRequest', message, getStatusCode);
  }

  if (password.length < 6) {
    throwError('badRequest', message, getStatusCode);
  }
}

function isUserRegistered(condition) {
  const message = 'User already registered';
  if (!condition) {
    throwError('conflict', message, getStatusCode);
  }
}

function isUserValid(condition) {
  const message = 'Invalid fields';
  if (!condition) {
    throwError('badRequest', message, getStatusCode);
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
