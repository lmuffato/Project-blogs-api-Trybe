const Joi = require('joi');
const error = require('./errorsObject');

const validateName = (name) => {
  const schema = Joi.string().min(8).required().validate(name);
  if (schema.error) throw error.invalidName;
};

const validateEmail = (email) => {
  if (!email) throw error.emailRequired;
  const schema = Joi.string().email().required().validate(email);
  if (schema.error) throw error.invalidEmail;
};

const validatePassword = (password) => {
  if (!password) throw error.passwordRequired;
  const schema = Joi.string().length(6).validate(password);
  if (schema.error) throw error.invalidPassword;
};

module.exports = {
  validatePassword,
  validateEmail,
  validateName,
};