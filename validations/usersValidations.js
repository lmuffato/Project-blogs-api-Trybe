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
  if (!regexEmail.test(email)) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.validEmail(),
    };
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
};