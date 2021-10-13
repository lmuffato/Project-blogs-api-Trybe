const userModels = require('../Models/userModels');
const { generateToken } = require('../auth/generateToken');

const {
  displayNameValidations,
  emailValidations,
  passwordValidations,
} = require('../Schema/userValidation');

const HTTP_STATUS_CONFLICT = 409;
const ERROR_MESSAGE = 'User already registered';

const addUsers = async (displayName, email, password, image) => {
  const validateDisplayName = displayNameValidations(displayName);
  const validateEmail = emailValidations(email);
  const validatePassword = passwordValidations(password);

  if (validateDisplayName) return validateDisplayName;
  if (validateEmail) return validateEmail;
  if (validatePassword) return validatePassword;

  const userExists = await userModels.checkEmailExists(email);
  if (userExists) return { code: HTTP_STATUS_CONFLICT, message: ERROR_MESSAGE };

  const { code, token } = generateToken({ displayName, email });
  await userModels.addUsers(displayName, email, password, image);

  return {
    code,
    token,
  };
};

module.exports = {
  addUsers,
};