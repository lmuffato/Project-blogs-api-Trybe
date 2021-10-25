const { User } = require('../../models');

const errorValidEmailRequired = {
  status: 400,
    error: {
      message: '"email" is required',
    },
};

const errorValidPasswordRequired = {
  status: 400,
    error: {
      message: '"password" is required',
    },
};

const errorValidEmailEmpty = {
  status: 400,
    error: {
      message: '"email" is not allowed to be empty',
    },
};

const errorValidPasswordEmpty = {
  status: 400,
    error: {
      message: '"password" is not allowed to be empty',
    },
};

const errorValidateLogin = {
  status: 400,
    error: {
      message: 'Invalid fields',
    },
};

const validateEmailRequired = (email) => {
  if (!email && email !== '') throw errorValidEmailRequired;
};

const validateEmailEmpty = (email) => {
  if (email === '') throw errorValidEmailEmpty;
};

const validatePasswordRequired = (password) => {
  if (!password && password !== '') throw errorValidPasswordRequired;
};

const validatePasswordEmpty = (password) => {
  if (password === '') throw errorValidPasswordEmpty;
};

const validateLogin = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });
  if (!result) throw errorValidateLogin;
  delete result.dataValues.password;
  return result.dataValues;
};

module.exports = {
  validateEmailRequired,
  validateEmailEmpty,
  validatePasswordRequired,
  validatePasswordEmpty,
  validateLogin,
};
