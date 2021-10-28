const { User } = require('../../../models');
const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');

async function verifyUserEmail(email) {
  const alreadyExists = await User.findOne({ where: { email } });

  const responseError = { status: httpStatusCode.conflit, message: errors.userAlreadyExistError };

  if (alreadyExists) return responseError;
}

module.exports = verifyUserEmail; 