module.exports = {
  LESS_THAN_8: {
    message: '"displayName" length must be at least 8 characters long',
    code: 400,
  },
  EMAIL_IS_NOT_VALID: {
    message: '"email" must be a valid email',
    code: 400,
  },
  EMAIL_IS_REQUIRED: {
    message: '"email" is required',
    code: 400,
  },
  PASSWORD_IS_REQUIRED: {
    message: '"password" is required',
    code: 400,
  },
  LESS_THAN_6: {
    message: '"password" length must be 6 characters long',
    code: 400,
  },
  USER_ALREADY_REGISTERED: {
    message: 'User already registered',
    code: 409,
  },
  INVALID_FIELDS: {
    message: 'Invalid fields',
    code: 400,
  },
  EMAIL_IS_EMPTY: {
    message: '"email" is not allowed to be empty',
    code: 400,
  },
  PASSWORD_IS_EMPTY: {
    message: '"password" is not allowed to be empty',
    code: 400,
  },
  TOKEN_NOT_FOUND: {
    message: 'Token not found',
    code: 401,
  },
  TOKEN_EXPIRED: {
    message: 'Expired or invalid token',
    code: 401,
  },
  USER_NOT_EXISTS: {
    message: 'User does not exist',
    code: 404,
  },
  NAME_IS_REQUIRED: {
    message: '"name" is required',
    code: 400,
  },
  TITLE_IS_REQUIRED: {
    message: '"title" is required',
    code: 400,
  },
  CONTENT_IS_REQUIRED: {
    message: '"content" is required',
    code: 400,
  },
  CATEGORYIDS_IS_REQUIRED: {
    message: '"categoryIds" is required',
    code: 400,
  },
  CATEGORYIDS_NOT_FOUND: {
    message: '"categoryIds" not found',
    code: 400,
  },
};
