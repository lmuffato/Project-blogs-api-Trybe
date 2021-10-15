const { StatusCodes } = require('http-status-codes');
const { check } = require('../utils');

function user(fields) {
  const validation = check.user.validate(fields);
  if (validation.error) {
    const error = validation.error.details[0].message;
    const code = StatusCodes.BAD_REQUEST;
    return { code, error };
  }
  const message = 'OK';
  const code = StatusCodes.OK;
  return { code, message };
}

module.exports = {
  user,
};
