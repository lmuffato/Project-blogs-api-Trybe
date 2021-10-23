const {
  status: { BAD_REQUEST, CONFLICT },
} = require('../utils');

module.exports = {
  user: {
    valid: {
      status: BAD_REQUEST,
      message: '"displayName" length must be at least 8 characters long',
    },
    email: {
      required: {
        status: BAD_REQUEST,
        message: '"email" is required',
      },
      valid: {
        status: BAD_REQUEST,
        message: '"email" must be a valid email',
      },
      exists: {
        status: CONFLICT,
        message: 'User already registered',
      },
    },
    password: {
      required: {
        status: BAD_REQUEST,
        message: '"password" is required',
      },
      valid: {
        status: BAD_REQUEST,
        message: '"password" length must be 6 characters long',
      },
    },
  },
  login: {
    email: {
      required: {
        status: BAD_REQUEST,
        message: '"email" is required',
      },
      empty: {
        status: BAD_REQUEST,
        message: '"email" is not allowed to be empty',
      },
    },
    password: {
      required: {
        status: BAD_REQUEST,
        message: '"password" is required',
      },
      empty: {
        status: BAD_REQUEST,
        message: '"password" is not allowed to be empty',
      },
    },
    notExists: {
      status: BAD_REQUEST,
      message: 'Invalid fields',
    },
  },
};
