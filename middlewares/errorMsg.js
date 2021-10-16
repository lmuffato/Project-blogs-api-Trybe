const invalidName = {
  message: '"displayName" length must be at least 8 characters long',
};

const invalidEmail = {
  message: '"email" must be a valid email',
};

const emailRequired = {
  message: '"email" is required',
};

const invalidPassword = {
  message: '"password" length must be 6 characters long',
};

const passwordRequired = {
  message: '"password" is required',
};

const duplicatedEmail = {
  message: 'User already registered',
};

const invalidFields = {
  message: 'Invalid fields',
};

const blanckEmail = {
  message: '"email" is not allowed to be empty',
};

const blanckPassword = {
  message: '"password" is not allowed to be empty',
};

const noToken = {
  message: 'Token not found',
};

const badToken = {
  message: 'Expired or invalid token',
};

const userNotFound = {
  message: 'User does not exist',
};

const noName = {
  message: '"name" is required',
};

const noTitle = {
  message: '"title" is required',
};

const noContent = {
  message: '"content" is required',
};

module.exports = {
  invalidName,
  invalidEmail,
  emailRequired,
  invalidPassword,
  passwordRequired,
  duplicatedEmail,
  invalidFields,
  blanckEmail,
  blanckPassword,
  noToken,
  badToken,
  userNotFound,
  noName,
  noTitle,
  noContent,
};
