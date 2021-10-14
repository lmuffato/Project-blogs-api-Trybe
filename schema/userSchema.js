const emailValidator = require('email-validator');

const errors = {
  noName: '"name" is required',
  nameLength: '"displayName" length must be at least 8 characters long',
  noEmail: '"email" is required',
  invalidEmail: '"email" must be a valid email',
  noPassword: '"password" is required',
  passwordLength: '"password" length must be 6 characters long',
  userExists: 'User already registered',
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

// const findValueInArrayOfObjects = (array, value, key) => {
//   const result = array.find((object) => object[key] === value);
//   if (result) return true;
//   return false;
// };

module.exports = {
  validateName,
  validatePassword,
  validateEmail,
  // findValueInArrayOfObjects,
  // validateId,
};
