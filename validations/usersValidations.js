const { errors, httpStatusCode } = require('../utils/errors');

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
 return { 
    status: httpStatusCode.badRequest,
    message: errors.lengthError('displayName', 8),
  }; 
}
};

const validateEmail = (email) => {
  const regexEmail = /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm; // => https://regexr.com;
  if (!email || email === '') {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('email'),
    };
  }
  if (!regexEmail.test(email)) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.validEmail(),
    };
  }
};

const validatePassword = (password) => {
  if (!password || password === '') {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('password'),
    };
  }
  if (password.length < 6) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.passwordLengthError('password', 6),
    };
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};