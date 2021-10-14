const errorMessage = require('../utils/errorMessages');

const checkDisplayName = (displayName) => {
  if (!displayName) throw errorMessage.DISPLAY_NAME_8_CHARACTERS;
  if (displayName.length < 8) throw errorMessage.DISPLAY_NAME_8_CHARACTERS; 
};

const checkEmail = (email) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) throw errorMessage.EMAIL_IS_REQUIRED;
  if (!regex.test(email)) throw errorMessage.EMAIL_INVALID;
};

const checkPassword = (password) => {
  if (!password) throw errorMessage.PASSWORD_IS_REQUIRED;
  if (password.length !== 6) throw errorMessage.PASSWORD_MUST_BE_6_CHARACTERS;
};

const validateUserFields = (req, _res, next) => {
  const { displayName, email, password } = req.body;

  checkDisplayName(displayName);
  checkEmail(email);
  checkPassword(password);

  next();
};

module.exports = validateUserFields;