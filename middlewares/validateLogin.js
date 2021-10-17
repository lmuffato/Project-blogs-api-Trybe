const {
  EMAIL_NOT_EMPTY,
  EMAIL_IS_REQUIRED,
  PASSWORD_NOT_EMPTY,
  PASSWORD_IS_REQUIRED,
} = require('../utils/errorMessages');

const checkEmail = (email) => {
  if (email === '') throw EMAIL_NOT_EMPTY;
  if (!email) throw EMAIL_IS_REQUIRED;
};

const checkPassword = (password) => {
  if (password === '') throw PASSWORD_NOT_EMPTY;
  if (!password) throw PASSWORD_IS_REQUIRED;
};

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;

  checkEmail(email);
  checkPassword(password);

  next();
};

module.exports = validateLogin;