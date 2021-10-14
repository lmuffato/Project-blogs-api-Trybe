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

module.exports = {
  createUsers,
};
