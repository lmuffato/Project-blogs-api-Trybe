const Joi = require('joi');
const error = require('../utils/errorsObject');
const tokenFunctions = require('../utils/jsonWebToken');

const validateName = (name) => {
  const schema = Joi.string().min(8).required().validate(name);
  if (schema.error) throw error.invalidName;
};

const validateEmail = (email) => {
  const schema = Joi.string().email().required().validate(email);
  if (schema.error) throw error.invalidEmail;
};

const validatePassword = (password) => {
  const schema = Joi.string().length(6).validate(password);
  if (schema.error) throw error.invalidPassword;
};

const createUser = async (displayName, email, password, image) => {
  validateName(displayName);
  validateEmail(email);
  if (!password) throw error.passwordRequired;
  validatePassword(password);
  return tokenFunctions.createToken({ displayName, email });
};

module.exports = {
  createUser,
};