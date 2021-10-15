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

module.exports = {
  errorDisplayName,
  errorEmailValid,
  errorEmailRequired,
  errorPassword,
  errorPasswordRequired,
  errorUserExists,
};
