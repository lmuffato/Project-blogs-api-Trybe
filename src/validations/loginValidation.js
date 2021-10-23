const { User } = require('../models');

const invalidFields = {
  status: 400,
  error: {
    message: 'Invalid fields',
  },
};

const emailIsRequired = {
  status: 400,
  error: {
    message: '"email" is required',
  },
};

const passwordIsRequired = {
  status: 400,
  error: {
    message: '"password" is required',
  },
};

const emailIsEmpty = {
  status: 400,
  error: {
    message: '"email" is not allowed to be empty',
  },
};

const passwordIsEmpty = {
  status: 400,
  error: {
    message: '"password" is not allowed to be empty',
  },
};

const validateEmail = (email) => {
  if (!email) throw emailIsRequired;
  if (email === '') throw emailIsEmpty;
};

const validatePassword = (password) => {
  if (!password) throw passwordIsRequired;
  if (password === '') throw passwordIsEmpty;
};

const validateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw invalidFields;
  delete user.dataValues.password;
  return user.dataValues;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateLogin,
};
