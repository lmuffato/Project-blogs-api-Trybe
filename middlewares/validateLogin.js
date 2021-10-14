const errorMessage = require('../utils/errorMessages');

const checkEmail = (email) => {
  if (email === '') throw errorMessage.EMAIL_NOT_EMPTY;
  if (!email) throw errorMessage.EMAIL_IS_REQUIRED;
};

const checkPassword = (password) => {
  if (password === '') throw errorMessage.PASSWORD_NOT_EMPTY;
  if (!password) throw errorMessage.PASSWORD_IS_REQUIRED;
};

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;

  checkEmail(email);
  checkPassword(password);

  next();
};

module.exports = validateLogin;