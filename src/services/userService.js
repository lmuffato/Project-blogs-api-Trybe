const { User } = require('../../models');
const error = require('../utils/errorsObject');
const tokenFunctions = require('../utils/jsonWebToken');
const validateFct = require('../utils/validateFunctions');

const emailExists = async (email) => {
  const emailExist = await User.findOne({ where: { email } });
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

const login = async (email, password) => {
  validateFct.validateEmail(email);
  const userExist = await User.findOne({ where: { email } });
  if (!userExist) throw error.invalidFields;
  console.log(userExist);
  validateFct.validatePassword(password);
  const result = await User.findOne({ where: { email, password } });
  console.log(result);
  // if (!result) throw error.invalidFields;
  return tokenFunctions.createToken({ email });
};

module.exports = {
  createUser,
  login,
};