const { User } = require('../../models');

const errorValidateName = {
  status: 400,
    error: {
      message: '"displayName" length must be at least 8 characters long',
    },
};

const errorValidateEmail = {
  status: 400,
    error: {
      message: '"email" must be a valid email',
    },
};

const errorValidEmailRequired = {
  status: 400,
    error: {
      message: '"email" is required',
    },
};

const errorValidatePassword = {
  status: 400,
    error: {
      message: '"password" length must be 6 characters long',
    },
};

const errorValidPasswordRequired = {
  status: 400,
    error: {
      message: '"password" is required',
    },
};

const errorValidEmailAlready = {
  status: 409,
    error: {
      message: 'User already registered',
    },
};

const validateName = (displayName) => {
  if (displayName.length < 8) throw errorValidateName;
};

const validateEmailRequired = (email) => {
  if (!email) throw errorValidEmailRequired;
};

const validateEmail = (email) => {
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) throw errorValidateEmail;
};

const validatePasswordRequired = (password) => {
  if (!password) throw errorValidPasswordRequired;
};

const validatePassword = (password) => {
  if (password.length >= 7 || password.length <= 5) throw errorValidatePassword;
};

const validateEmailAlready = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result) throw errorValidEmailAlready;
};

module.exports = {
  validateName,
  validateEmail,
  validateEmailRequired,
  validatePassword,
  validatePasswordRequired,
  validateEmailAlready,
};
