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

const EMAIL_NOT_EMPTY = {
  status: httpStatus.BAD_REQUEST,
  message: '"email" is not allowed to be empty',
};

const INVALID_FIELDS = {
  status: httpStatus.BAD_REQUEST,
  message: 'Invalid fields',
};

const PASSWORD_MUST_BE_6_CHARACTERS = {
  status: httpStatus.BAD_REQUEST,
  message: '"password" length must be 6 characters long',
};

const PASSWORD_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"password" is required',
};

const PASSWORD_NOT_EMPTY = {
  status: httpStatus.BAD_REQUEST,
  message: '"password" is not allowed to be empty',
};

const EMAIL_ALREADY_EXISTS = {
  status: httpStatus.BAD_REQUEST,
  message: 'User already registered',
};

module.exports = {
  DISPLAY_NAME_8_CHARACTERS,
  EMAIL_INVALID,
  EMAIL_NOT_EMPTY,
  EMAIL_IS_REQUIRED,
  PASSWORD_MUST_BE_6_CHARACTERS,
  PASSWORD_IS_REQUIRED,
  PASSWORD_NOT_EMPTY,
  EMAIL_ALREADY_EXISTS,
  INVALID_FIELDS,
};