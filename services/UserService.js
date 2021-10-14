const validations = require('./validations');

const createUsers = async (displayName, email, password, image) => {
  const validateInsertedBodyError = validations
    .validateBodyCreateUsers({ displayName, email, password, image });
  if (validateInsertedBodyError) {
    return { numberStatus: 400, message: validateInsertedBodyError.details[0].message };
  }

  const validateAlreadyExistsUserByEmailError = await validations
    .validateAlreadyExistsUserByEmail(email);
  if (validateAlreadyExistsUserByEmailError) {
    return { numberStatus: 409, message: validateAlreadyExistsUserByEmailError.message };
  }

  return false;
};

const loginUsers = async (email, password) => {
  const validateInsertedBodyError = validations
  .validateBodyLoginUsers({ email, password });
  if (validateInsertedBodyError) {
    return { numberStatus: 400, message: validateInsertedBodyError.details[0].message };
  }

  const validateIfExistsUser = await validations
    .validateAlreadyExistsUserByEmail(email);
  if (!validateIfExistsUser) {
    return { numberStatus: 400, message: 'Invalid fields' };
  }
};

const getAllUsersCheck = async (token) => {
  const validateToken = validations
  .validateToken(token);
  if (validateToken) {
    return { numberStatus: 401, message: validateToken.message };
  }
  return false;
};

module.exports = {
  createUsers,
  loginUsers,
  getAllUsersCheck,
};
