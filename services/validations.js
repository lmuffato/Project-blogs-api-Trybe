const { User } = require('../models');

const INVALID_NAME = {
  code: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const INVALID_EMAIL = {
  code: 400,
  message: '"email" must be a valid email',
};

const EMAIL_REQUIRED = {
  code: 400,
  message: '"email" is required',
};

const ALREADY_REGISTERED = {
  code: 409,
  message: 'User already registered',
};

const INVALID_PASSWORD = {
  code: 400,
  message: '"password" length must be 6 characters long',
};

const PASSWORD_REQUIRED = {
  code: 400,
  message: '"password" is required',
};

const validateUser = (name) => {
  if (name.length < 8) return INVALID_NAME;
};

const validateEmail = async (email) => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
  if (!email) return EMAIL_REQUIRED;
  if (!regex.test(email)) return INVALID_EMAIL;
  const exists = await User.findAll({ where: { email } });
  if (exists.length > 0) return ALREADY_REGISTERED;
};

const validatePassword = (password) => {
  if (!password) return PASSWORD_REQUIRED;
  if (password.length !== 6) return INVALID_PASSWORD;
};

module.exports = {
  validateUser,
  validateEmail,
  validatePassword,
};
