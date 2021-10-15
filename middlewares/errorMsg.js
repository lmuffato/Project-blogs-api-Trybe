const invalidName = {
  message: 'displayName length must be at least 8 characters long',
};

const invalidEmail = {
  message: 'email must be a valid email',
};

const emailRequired = {
  message: 'email is required',
};

const invalidPassword = {
  message: 'password length must be 6 characters long',
};

const passwordRequired = {
  message: 'password is required',
};

const duplicatedEmail = {
  message: 'User already registered',
};

module.exports = {
  invalidName,
  invalidEmail,
  emailRequired,
  invalidPassword,
  passwordRequired,
  duplicatedEmail,
};
