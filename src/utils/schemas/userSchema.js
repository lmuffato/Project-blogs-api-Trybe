const {
  verifyNameLength,
  verifyPassword,
  verifyPasswordLength,
  verifyEmail,
  verifyEmailFormat,
  validateEmail,
  verifyEmailLength,
} = require('../validations/validations');

const errors = {
  INVALID_NAME: '"displayName" length must be at least 8 characters long',
  INVALID_PASSWORD: '"password" length must be 6 characters long',
  MISSING_PASSWORD: '"password" is required',
  EMPTY_PASSWORD: '"password" is not allowed to be empty',
  WRONG_EMAIL_FORMAT: '"email" must be a valid email',
  MISSING_EMAIL: '"email" is required',
  INVALID_EMAIL: 'User already registered',
  EMPTY_EMAIL: '"email" is not allowed to be empty',
};
const status = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
};

const userValidations = (displayName, password) => {
  switch (true) {
    case verifyNameLength(displayName): return {
      status: status.BAD_REQUEST, message: errors.INVALID_NAME,
    };
    case verifyPassword(password): return {
      status: status.BAD_REQUEST, message: errors.MISSING_PASSWORD,
    };
    case verifyPasswordLength(password): return {
      status: status.BAD_REQUEST, message: errors.INVALID_PASSWORD,
    };
    default: return {};
  }
};

const emailValidations = async (email) => {
  switch (true) {
    case verifyEmail(email): return {
      status: status.BAD_REQUEST, message: errors.MISSING_EMAIL,
    };
    case verifyEmailFormat(email): return {
      status: status.BAD_REQUEST, message: errors.WRONG_EMAIL_FORMAT,
    };
    case (await validateEmail(email)): return {
      status: status.CONFLICT, message: errors.INVALID_EMAIL,
    };
    default: return {};
  }
};

const loginValidations = (email, password) => {
  switch (true) {
    case verifyEmail(email): return {
      status: status.BAD_REQUEST, message: errors.MISSING_EMAIL,
    };
    case verifyEmailLength(email): return {
      status: status.BAD_REQUEST, message: errors.EMPTY_EMAIL,
    };
    case verifyPassword(password): return {
      status: status.BAD_REQUEST, message: errors.MISSING_PASSWORD,
    };
    case verifyPasswordLength(password): return {
      status: status.BAD_REQUEST, message: errors.EMPTY_PASSWORD,
    };
    default: return {};
  }
};

module.exports = {
  userValidations,
  emailValidations,
  loginValidations,
};