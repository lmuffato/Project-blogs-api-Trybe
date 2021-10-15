const status = {
  HTTP_STATUS_OK: 200,
  HTTP_STATUS_CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  HTTP_STATUS_CONFLICT: 409,
  DISPLAY_NAME_ERROR: '"displayName" length must be at least 8 characters long',
  EMAIL_REQUIRED: '"email" is required',
  EMAIL_INVALID: '"email" must be a valid email',
  EMAIL_EMPTY: '"email" is not allowed to be empty',
  PASSWORD_REQUIRED: '"password" is required',
  PASSWORD_LENGTH: '"password" length must be 6 characters long',
  PASSWORD_EMPTY: '"password" is not allowed to be empty',
  ERROR_MESSAGE: 'User already registered',
  ERROR_LOGIN: 'Invalid fields',
  ERROR_TOKEN: 'Token not found',
  EXPIRED_TOKEN: 'Expired or invalid token',
  USER_NOT_FOUND: 'User does not exist',
  NAME_CATEGORIES: '"name" is required',
};

module.exports = {
  status,
};