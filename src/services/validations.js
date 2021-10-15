const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');
const { check } = require('../utils');

function invalidateFields(fields) {
  const validation = check.user.validate(fields);
  if (validation.error) {
    const error = validation.error.details[0].message;
    const code = StatusCodes.BAD_REQUEST;
    return { code, error };
  }
  return false;
}

async function checkUserExistence(email) {
  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      const error = 'User already registered';
      const code = StatusCodes.CONFLICT;
      return { code, error };
    }
    return false;
  } catch (e) {
    console.log(e);
    const error = 'Internal server error, se for administrador, cheque os logs';
    const code = StatusCodes.INTERNAL_SERVER_ERROR;
    return { code, error };
  }
}

function user(fields) {
  const invalidFields = invalidateFields(fields);
  if (invalidFields) return invalidFields;

  const userExists = checkUserExistence();
  if (userExists) return userExists;

  const message = 'OK';
  const code = StatusCodes.OK;
  return { code, message };
}

// const user = services.validations.
// const user = { exists: 'teste' };
// if (user.exists) next({ code: user.code, message: user.exists });
// return res.status(StatusCodes.CONFLICT).json({ message });

module.exports = {
  user,
};
