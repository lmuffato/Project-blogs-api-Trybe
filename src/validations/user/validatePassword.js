const errors = require('../../utils/errors');

function validatePassword(password) {
  if (password === undefined) {
    return { message: errors.requiredError('password') };
  }

  if (password.length === 0) {
    return { message: errors.emptyFieldError('password') };
  }

  if (password.length < 6) {
    return { message: errors.passwordLengthError('password', 6) };
  }
}

module.exports = validatePassword;