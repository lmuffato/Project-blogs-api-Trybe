const errors = require('../../utils/errors');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === undefined) {
    return { message: errors.requiredError('email') };
  }

  if (email.length === 0) {
    return { message: errors.emptyFieldError('email') };
  }

  if (!emailRegex.test(email)) {
    return { message: errors.validEmail() };
  }
}

module.exports = validateEmail;