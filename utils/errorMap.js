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
  emailCantBeEmpty: {
    error: {
      code: 400,
      message: '"email" is not allowed to be empty',
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
  passwordCantBeEmpty: {
    error: {
      code: 400,
      message: '"password" is not allowed to be empty',
    },
  },
  userAlreadyExists: {
    error: {
      code: 409,
      message: 'User already registered',
    },
  },
  invalidFields: {
    error: {
      code: 400,
      message: 'Invalid fields',
    },
  },
  internalError: {
    error: {
      code: 500,
      message: 'internal server error',
    },
  },
};
