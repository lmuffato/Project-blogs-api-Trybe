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
};
