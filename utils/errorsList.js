const invalidEmail = {
  status: 400,
  message: { message: '"email" must be a valid email' },
};

const emailRequired = {
  status: 400,
  message: { message: '"email" is required' },
};

const nameRequired = {
  status: 400,
  message: { message: '"displayName" is required' },
};

const nameLength = {
  status: 400,
  message: { message: '"displayName" length must be at least 8 characters long' },
};

const passwordLength = {
  status: 400,
  message: { message: '"password" length must be 6 characters long' },
};

const passwordRequired = {
  status: 400,
  message: { message: '"password" is required' },
};

const emptyEmail = {
  status: 400,
  message: { message: '"email" is not allowed to be empty' },
};

const emptyPassword = {
  status: 400,
  message: { message: '"password" is not allowed to be empty' },
};

module.exports = {
  invalidEmail,
  emailRequired,
  nameRequired,
  nameLength,
  passwordLength,
  passwordRequired,
  emptyEmail,
  emptyPassword,
};
