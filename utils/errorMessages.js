const httpStatus = require('./httpStatus');

const DISPLAY_NAME_8_CHARACTERS = {
  status: httpStatus.BAD_REQUEST,
  message: '"displayName" length must be at least 8 characters long',
};

const EMAIL_INVALID = {
  status: httpStatus.BAD_REQUEST,
  message: '"email" must be a valid email',
};

const EMAIL_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"email" is required',
};

const PASSWORD_MUST_BE_6_CHARACTERS = {
  status: httpStatus.BAD_REQUEST,
  message: '"password" length must be 6 characters long',
};

const PASSWORD_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"password" is required',
};

const EMAIL_ALREADY_EXISTS = {
  status: httpStatus.CONFLICT,
  message: 'User already registered',
};

module.exports = {
  DISPLAY_NAME_8_CHARACTERS,
  EMAIL_INVALID,
  EMAIL_IS_REQUIRED,
  PASSWORD_MUST_BE_6_CHARACTERS,
  PASSWORD_IS_REQUIRED,
  EMAIL_ALREADY_EXISTS,
};