const { User } = require('../../models');
const error = require('../utils/errorsObject');
const tokenFunctions = require('../utils/jsonWebToken');
const validateFct = require('../utils/validateFunctions');

const emailExists = async (email) => {
  const emailExist = await User.findOne({ email });
  if (emailExist) throw error.userExists;
};

const createUser = async (displayName, email, password, image) => {
  validateFct.validateName(displayName);
  validateFct.validateEmail(email);
  validateFct.validatePassword(password);
  await emailExists(email);
  await User.create({ displayName, email, password, image });
  return tokenFunctions.createToken({ displayName, email });
};

module.exports = {
  createUser,
};