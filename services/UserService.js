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
    return { 
        error: true,
        numberStatus: 400,
        message: validateInsertedBodyError.details[0].message, 
      };
  }

  const validateIfExistsUser = await validations
    .validateAlreadyExistsUserByEmail(email);
  if (!validateIfExistsUser) {
    return { error: true, numberStatus: 400, message: 'Invalid fields' };
  }

  const { id, displayName } = validateIfExistsUser.user;
  
  return { id, displayName };
};

module.exports = {
  createUsers,
  loginUsers,
};
