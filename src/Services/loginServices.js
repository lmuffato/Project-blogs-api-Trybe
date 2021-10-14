const userModels = require('../Models/userModels');
const { generateToken } = require('../auth/generateToken');
const { status } = require('../utils');

const {
  emailValidations,
  passwordValidations,
} = require('../Schema/userValidation');

const userLogin = async (email, password) => {
  const validateEmail = emailValidations(email);
  const validatePassword = passwordValidations(password);

  if (validateEmail) return validateEmail;
  if (validatePassword) return validatePassword;

  const userExists = await userModels.checkEmailExists(email);
  if (!userExists) return { code: status.BAD_REQUEST, message: status.ERROR_LOGIN };

  const { token } = generateToken({ email });

  return {
    code: status.HTTP_STATUS_OK,
    token,
  };
};

module.exports = {
  userLogin,
};