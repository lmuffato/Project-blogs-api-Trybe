const { errors, httpStatusCode } = require('../utils/errors');

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
 return { 
    status: httpStatusCode.badRequest,
    message: errors.lengthError('displayName', 8),
  }; 
}
};

module.exports = {
  validateDisplayName,
};