const emailValidator = require('email-validator');

const errors = {
  noName: '"name" is required',
  nameLength: '"displayName" length must be at least 8 characters long',
  noEmail: '"email" is required',
  invalidEmail: '"email" must be a valid email',
  noPassword: '"password" is required',
  passwordLength: '"password" length must be 6 characters long',
  userExists: 'User already registered',
  loginPasswordUndefined: '"password" is required',
  loginEmailUndefined: '"email" is required',
  loginPasswordNull: '"password" is not allowed to be empty',
  loginEmailNull: '"email" is not allowed to be empty',
};

const code = {
  badRequest: 400,
};

const verifyTypeString = (data) => typeof data === 'string';
const verifyMinLength = (data, minLength) => data.length < minLength;
const verifLength = (data, Length) => data.length === Length;

const validateName = (name) => {
  switch (true) {
    case !name: return { code: code.badRequest, message: errors.noName };
    case !verifyTypeString(name): return { code: code.badRequest, message: errors.noName };
    case verifyMinLength(name, 8): return { code: code.badRequest, message: errors.nameLength };
    default: return false;
  }
};

const validatePassword = (password) => {
  switch (true) {
    case !password: return { code: code.badRequest, message: errors.noPassword };
    case !verifyTypeString(password): return { code: code.badRequest, message: errors.noPassword };
    case !verifLength(password, 6): return { 
      code: code.badRequest, message: errors.passwordLength };
    default: return false;
  }
};

const validateEmail = (email) => {
  switch (true) {
    case !email: return { code: code.badRequest, message: errors.noEmail };
    case !emailValidator.validate(email): return { 
      code: code.badRequest, message: errors.invalidEmail };
    default: return false;
  }
};

const validateEmailLogin = (email) => {
  switch (true) {
    case (email === ''): return { code: code.badRequest, message: errors.loginEmailNull };
    case !email: return { code: code.badRequest, message: errors.loginEmailUndefined };
    case !emailValidator.validate(email): return { 
      code: code.badRequest, message: errors.invalidEmail };
    default: return false;
  }
};

const validatePasswordLogin = (password) => {
  switch (true) {
    case (password === ''): return { code: code.badRequest, message: errors.loginPasswordNull };
    case !password: return { code: code.badRequest, message: errors.loginPasswordUndefined };
    default: return false;
  }
};

// const findValueInArrayOfObjects = (array, value, key) => {
//   const result = array.find((object) => object[key] === value);
//   if (result) return true;
//   return false;
// };

module.exports = {
  validateName,
  validatePassword,
  validateEmail,
  validateEmailLogin,
  validatePasswordLogin,
  // findValueInArrayOfObjects,
  // validateId,
};
