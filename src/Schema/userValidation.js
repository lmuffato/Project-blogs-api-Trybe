const BAD_REQUEST = 400;
const DISPLAY_NAME_ERROR = '"displayName" length must be at least 8 characters long';
const EMAIL_REQUIRED = '"email" is required';
const EMAIL_INVALID = '"email" must be a valid email';
const PASSWORD_REQUIRED = '"password" is required';
const PASSWORD_LENGTH = '"password" length must be 6 characters long';

const displayNameValidations = (displayName) => {
  if (displayName.length < 8) return { code: BAD_REQUEST, message: DISPLAY_NAME_ERROR };
  return false;
};

const emailValidations = (email) => {
  if (!email) return { code: BAD_REQUEST, message: EMAIL_REQUIRED };
  if (!email.match(/\S+@\S+\.\S+/)) return { code: BAD_REQUEST, message: EMAIL_INVALID };
  return false;
};

const passwordValidations = (password) => {
  if (!password) return { code: BAD_REQUEST, message: PASSWORD_REQUIRED };
  if (password.length < 6) return { code: BAD_REQUEST, message: PASSWORD_LENGTH };
  return false;
};

module.exports = {
  displayNameValidations,
  emailValidations,
  passwordValidations,
};