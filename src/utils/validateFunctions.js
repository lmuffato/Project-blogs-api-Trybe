const Joi = require('joi');
const fileError = require('./errorsObject');

const validateName = (name) => {
  const schema = Joi.string().min(8).required().validate(name);
  if (schema.error) throw fileError.invalidName;
};

const validateEmail = (email) => {
  if (email === '') throw fileError.emptyEmail;
  if (!email) throw fileError.emailRequired;
  const schema = Joi.string().email().required().validate(email);
  if (schema.error) throw fileError.invalidEmail;
};
const validatePassword = (password) => {
  if (password === '') throw fileError.emptyPassword;
  if (!password) throw fileError.passwordRequired;
  const schema = Joi.string().length(6).validate(password);
  if (schema.error) throw fileError.invalidPassword;
};

const validatePost = (bodyObject) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    categoryIds: Joi.array().required(),
    content: Joi.string().required(),
  }).validate(bodyObject);
  if (error) throw error;
};

const EditPostParams = (paramsObj) => {
  const { error } = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
  }).validate(paramsObj);
  if (error) throw error;
};

module.exports = {
  validatePassword,
  validateEmail,
  validateName,
  validatePost,
  EditPostParams,
};