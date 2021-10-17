const {
  DISPLAY_NAME_8_CHARACTERS,
  EMAIL_IS_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_IS_REQUIRED,
  PASSWORD_MUST_BE_6_CHARACTERS,
} = require('../utils/errorMessages');

const checkDisplayName = (displayName) => {
  if (!displayName) throw DISPLAY_NAME_8_CHARACTERS;
  if (displayName.length < 8) throw DISPLAY_NAME_8_CHARACTERS; 
};

const checkEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) throw EMAIL_IS_REQUIRED;
  if (!regex.test(email)) throw EMAIL_INVALID;
};

const checkPassword = (password) => {
  if (!password) throw PASSWORD_IS_REQUIRED;
  if (password.length !== 6) throw PASSWORD_MUST_BE_6_CHARACTERS;
};

const validateUserFields = (req, _res, next) => {
  const { displayName, email, password } = req.body;

  checkDisplayName(displayName);
  checkEmail(email);
  checkPassword(password);

  next();
};

module.exports = validateUserFields;