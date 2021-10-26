const { httpStatusCode, errors } = require('../utils/errors');

function validadeCategory(name) {
  if (!name) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('name'),
    };
  }
}

module.exports = validadeCategory;