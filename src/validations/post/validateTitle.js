const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');

function validateTitle(title) {
  if (!title) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('title'),
    };
  }
}

module.exports = validateTitle;