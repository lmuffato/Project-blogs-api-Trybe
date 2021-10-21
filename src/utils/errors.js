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
  userEmailNotExists: {
    code: 400,
    message: 'Invalid fields',
  },
  invalidPassword: {
    code: 401,
    message: 'Invalid password',
  },
  tokenNotFound: {
    code: 401,
    message: 'Token not found',
  },
  invalidToken: {
    code: 401,
    message: 'Expired or invalid token',
  },
  notFoundUser: {
    code: 404,
    message: 'User does not exist',
  },
  notFoundCategory: {
    code: 400,
    message: '"categoryIds" not found',
  },
  notFoundPost: {
    code: 404,
    message: 'Post does not exist',
  },
  notEditable: {
    code: 400,
    message: 'Categories cannot be edited',
  },
  unauthorized: {
    code: 401,
    message: 'Unauthorized user',
  },

};

module.exports = errors;
