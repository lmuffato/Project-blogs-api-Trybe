const errors = require('../../utils/errors');

function validadeDisplayName(displayName) {
  if (displayName === undefined) {
    return { message: errors.requiredError('displayName') };
  }

  if (displayName.length < 8) {
    return { message: errors.lengthError('displayName', 8) };
  }
}

module.exports = validadeDisplayName;