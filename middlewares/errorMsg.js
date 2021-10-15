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
};
