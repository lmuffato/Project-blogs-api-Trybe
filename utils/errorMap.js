module.exports = {
  displayNameLessThanEight: {
    error: {
      code: 400,
      message: '"displayName" length must be at least 8 characters long',
    },
  },
  nameIsRequired: {
    error: {
      code: 400,
      message: '"name" is required',
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
  nonExistentUser: {
    error: {
      code: 404,
      message: 'User does not exist',
    },
  },
  categoryAlreadyExists: {
    error: {
      code: 409,
      message: 'Category already registered',
    },
  },
  invalidFields: {
    error: {
      code: 400,
      message: 'Invalid fields',
    },
  },
  titleIsRequired: {
    error: {
      code: 400,
      message: '"title" is required',
    },
  },
  contentIsRequired: {
    error: {
      code: 400,
      message: '"content" is required',
    },
  },
  categoryidIsRequired: {
    error: {
      code: 400,
      message: '"categoryIds" is required',
    },
  },
  categoryidsNotFound: {
    error: {
      code: 400,
      message: '"categoryIds" not found',
    },
  },
  postNotExist: {
    error: {
      code: 404,
      message: 'Post does not exist',
    },
  },
  tokenNotFound: {
    error: {
      code: 401,
      message: 'Token not found',
    },
  },
  invalidToken: {
    error: {
      code: 401,
      message: 'Expired or invalid token',
    },
  },
  internalError: {
    error: {
      code: 500,
      message: 'internal server error',
    },
  },
};
