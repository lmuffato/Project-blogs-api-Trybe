const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');

function validateContent(content) {
  if (!content) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('content'),
    };
  }
}

module.exports = validateContent;