const invalidName = {
  message: '"displayName" length must be at least 8 characters long',
  status: 400,
};

const invalidEmail = {
  message: '"email" must be a valid email',
  status: 400,
};

const invalidPassword = {
  message: '"password" length must be 6 characters long',
  status: 400,
};

const emailRequired = {
  message: '"email" is required',
  status: 400,
};

const passwordRequired = {
  message: '"password" is required',
  status: 400,
};

const nameRequired = {
  message: '"name" is required',
  status: 400,
};

const tokenNotFound = {
  message: 'Token not found',
  status: 401,
};

const expOrInvalidToken = {
  message: 'Expired or invalid token',
  status: 401,
};

const userExists = {
  message: 'User already registered',
  status: 409,
};

const userDoesNotExist = {
  message: 'User does not exist',
  status: 404,
};

const postDoesNotExist = {
  message: 'Post does not exist',
  status: 404,
};

const emptyEmail = {
  message: '"email" is not allowed to be empty',
  status: 400,
};

const emptyPassword = {
  message: '"password" is not allowed to be empty',
  status: 400,
};

const invalidFields = {
  message: 'Invalid fields',
  status: 400,
};

const categoryNotFound = {
  message: '"categoryIds" not found',
  status: 400,
};

module.exports = {
  tokenNotFound,
  expOrInvalidToken,
  invalidName,
  invalidEmail,
  invalidPassword,
  passwordRequired,
  emailRequired,
  userExists,
  emptyEmail,
  emptyPassword,
  invalidFields,
  userDoesNotExist,
  nameRequired,
  categoryNotFound,
  postDoesNotExist,
};