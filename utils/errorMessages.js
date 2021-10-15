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
  status: httpStatus.CONFLICT,
  message: 'User already registered',
};

const TOKEN_NOT_FOUND = {
  status: httpStatus.UNAUTHORIZED,
  message: 'Token not found',
};

const TOKEN_NOT_VALID = {
  status: httpStatus.UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const USER_DOES_NOT_EXIST = {
  status: httpStatus.NOT_FOUND,
  message: 'User does not exist',
};

const NAME_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"name" is required',
};

const TITLE_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"title" is required',
};

const CONTENT_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"content" is required',
};

const CATEGORY_ID_IS_REQUIRED = {
  status: httpStatus.BAD_REQUEST,
  message: '"categoryIds" is required',
};

const CATEGORY_ID_MUST_BE_ARRAY = {
  status: httpStatus.BAD_REQUEST,
  message: '"categoryId" must be an array format',
};

const CATEGORY_IDS_NOT_FOUND = {
  status: httpStatus.BAD_REQUEST,
  message: '"categoryIds" not found',
};

const POST_DOES_NOT_EXISTS = {
  status: httpStatus.NOT_FOUND,
  message: 'Post does not exist',
};

const UNAUTHORIZED_USER = {
  status: httpStatus.UNAUTHORIZED,
  message: 'Unauthorized user',
};

const CATEGORY_ID_CANNOT_BE_EDITED = {
  status: httpStatus.BAD_REQUEST,
  message: 'Categories cannot be edited',
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
  TOKEN_NOT_FOUND,
  TOKEN_NOT_VALID,
  USER_DOES_NOT_EXIST,
  NAME_IS_REQUIRED,
  TITLE_IS_REQUIRED,
  CONTENT_IS_REQUIRED,
  CATEGORY_ID_IS_REQUIRED,
  CATEGORY_ID_MUST_BE_ARRAY,
  CATEGORY_IDS_NOT_FOUND,
  POST_DOES_NOT_EXISTS,
  UNAUTHORIZED_USER,
  CATEGORY_ID_CANNOT_BE_EDITED,
};