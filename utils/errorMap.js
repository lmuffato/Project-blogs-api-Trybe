module.exports = {
  nameLessThanEight: {
    error: {
      code: 400,
      message: '"displayName" length must be at least 8 characters long',
    },
  },
  emailIsRequired: {
    error: {
      code: 400,
      message: '"email" is required',
    },
  },
  emailMustBeValid: {
    error: {
      code: 400,
      message: '"email" must be a valid email',
    },
  },
  passwordIsRequired: {
    error: {
      code: 400,
      message: '"password" is required',
    },
  },
  passwordOtherThanSix: {
    error: {
      code: 400,
      message: '"password" length must be 6 characters long',
    },
  },
  userAlreadyExists: {
    error: {
      code: 409,
      message: 'User already registered',
    },
  },
  internalError: {
    error: {
      code: 500,
      message: 'internal server error',
    },
  },
};
