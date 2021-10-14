const { status } = require('../utils');

const displayNameValidations = (displayName) => {
  if (displayName.length < 8) {
    return {
      code: status.BAD_REQUEST, message: status.DISPLAY_NAME_ERROR,
    };
  }
  return false;
};

const emailValidations = (email) => {
  if (email === '') return { code: status.BAD_REQUEST, message: status.EMAIL_EMPTY };
  if (!email) return { code: status.BAD_REQUEST, message: status.EMAIL_REQUIRED };
  if (!email.match(/\S+@\S+\.\S+/)) {
    return {
      code: status.BAD_REQUEST, message: status.EMAIL_INVALID,
    };
  }
  return false;
};

const passwordValidations = (password) => {
  if (password === '') return { code: status.BAD_REQUEST, message: status.PASSWORD_EMPTY };
  if (!password) return { code: status.BAD_REQUEST, message: status.PASSWORD_REQUIRED };
  if (password.length < 6) return { code: status.BAD_REQUEST, message: status.PASSWORD_LENGTH };
  return false;
};

module.exports = {
  displayNameValidations,
  emailValidations,
  passwordValidations,
};