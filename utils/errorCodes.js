const errorDisplayName = {
  message: '"displayName" length must be at least 8 characters long',
};

const errorEmailValid = {
  message: '"email" must be a valid email',
};

const errorEmailRequired = {
  message: '"email" is required',
};

const errorPassword = {
  message: '"password" length must be 6 characters long',
};

const errorPasswordRequired = {
  message: '"password" is required',
};

const errorUserExists = {
  message: 'User already registered',
};

const errorUserNotFound = {
  message: 'User does not exist',
};

const errorLogin = {
  message: 'Invalid fields',
};

const errorEmailNotEmpty = {
  message: '"email" is not allowed to be empty',
};

const errorPasswordNotEmpty = {
  message: '"password" is not allowed to be empty',
};

const errorToken = {
  message: 'Token not found',
};

const errorTokenInvalid = {
  message: 'Expired or invalid token',
};

const errorCategoryName = {
  message: '"name" is required',
};

module.exports = {
  errorDisplayName,
  errorEmailValid,
  errorEmailRequired,
  errorPassword,
  errorPasswordRequired,
  errorUserExists,
  errorLogin,
  errorEmailNotEmpty,
  errorPasswordNotEmpty,
  errorToken,
  errorTokenInvalid,
  errorUserNotFound,
  errorCategoryName,
};
