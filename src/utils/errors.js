const errors = {
  invalidNameLength: {
    code: 400,
    message: '"displayName" length must be at least 8 characters long',
  },
  invalidPasswordLength: {
    code: 400,
    message: '"password" length must be 6 characters long',
  },
  emailInvalidFormat: {
    code: 400,
    message: '"email" must be a valid email',
  },
  nullField: (field) => ({
    code: 400,
    message: `"${field}" is required`,
  }),
  userAlreadyExists: {
    code: 409,
    message: 'User already registered',
  },
  emptyField: (field) => ({
    code: 400,
    message: `"${field}" is not allowed to be empty`,
  }),
  userNotExists: {
    code: 400,
    message: 'Invalid fields',
  },
  invalidPassword: {
    code: 401,
    message: 'Invalid password',
  },
};

module.exports = errors;
