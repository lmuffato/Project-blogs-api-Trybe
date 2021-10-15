const { getStatusCode } = require('../utils/statusCode');
const { throwError } = require('../utils/error');
const token = require('./token');

function isRequired(condition, field) {
  const message = `"${field}" is required`;
  if (!condition) {
    throwError('badRequest', message, getStatusCode);
  }
}

function verifyName(displayName) {
  const message = '"displayName" length must be at least 8 characters long';
  const isDisplayName = !!displayName;

  isRequired(isDisplayName, 'displayName');

  if (displayName.length < 8) {
    throwError('badRequest', message, getStatusCode);
  }
}

function verifyEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isRegexValid = emailRegex.test(email);
  const isEmail = !!email;
  let message = '"email" must be a valid email';

  if (email === '') {
    message = '"email" is not allowed to be empty';
    throwError('badRequest', message, getStatusCode);
  }

  isRequired(isEmail, 'email');

  if (!isRegexValid) {
    throwError('badRequest', message, getStatusCode);
  }
}

function verifyPassword(password) {
  const isPassword = !!password;
  let message = '"password" length must be 6 characters long';

  if (password === '') {
    message = '"password" is not allowed to be empty';
    throwError('badRequest', message, getStatusCode);
  }

  isRequired(isPassword, 'password');

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

function isUserValid(condition, code, message) {
  if (!condition) {
    throwError(code, message, getStatusCode);
  }
}

function isCategoryValid(category) {
  const message = '"categoryIds" not found';
  const isCategory = !!category;

  if (!isCategory) {
    throwError('badRequest', message, getStatusCode);
  }
}

module.exports = {
  isRequired,
  verifyName,
  verifyEmail,
  verifyPassword,
  isUserRegistered,
  isUserValid,
  isCategoryValid,
  ...token,
};
