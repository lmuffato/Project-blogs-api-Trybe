const NAME_LENGTH = 8;

// Errors:
const ERROR_NAME = '"displayName", length must be at least 8 characters long';
const ERROR_EMAIL = '"email", must be a valid email';
const ERROR_EMAIL_UNDEFINED = '"email", is required';
const ERROR_PASSWORD = '"password",length must be 6 characters long';
const ERROR_PASSWORD_UNDEFINED = '"password",is required';

const checkPassword = (password) => {
  if (password.length !== 6) {
    return { err: { code: 'invalid_data', message: ERROR_PASSWORD }, error: 400 };
  }
  if (!password) {
    return { err: { code: 'invalid_data', message: ERROR_PASSWORD_UNDEFINED }, error: 400 };
  }
  return false;
};

const checkUser = (email, password) => {
  const validEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!email.test(validEmail)) {
    return { err: { code: 'invalid_data', message: ERROR_EMAIL }, error: 400 };
  }
  if (!email) {
    return { err: { code: 'invalid_data', message: ERROR_EMAIL_UNDEFINED }, error: 400 };
  }
  return checkPassword(password);
};

const check = (data) => {
  const { displayName, email, password } = data;

  if (displayName.length < NAME_LENGTH) {
   return {
    err: { code: 'invalid_data', message: ERROR_NAME }, error: 400 };
  }

  const validUser = checkUser(email, password);
  if (validUser.err) return validUser;

  return false;
};

module.exports = {
  check,
};
