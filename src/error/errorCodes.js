const displayName = {
  message: '"displayName" length must be at least 8 characters long',
};

const emailRequired = {
  message: '"email" is required',
};

const emailValid = {
  message: '"email" must be a valid email',
};

const passLength = {
  message: '"password" length must be 6 characters long',
};

const passRequired = {
  message: '"password" is required',
};

const userExists = {
  message: 'User already registered',
};

module.exports = {
  displayName,
  emailValid,
  emailRequired,
  passLength,
  passRequired,
  userExists,
};
