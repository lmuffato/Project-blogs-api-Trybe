const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');

function validadeCategory(name) {
  if (!name) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('name'),
    };
  }
}

module.exports = validadeCategory;