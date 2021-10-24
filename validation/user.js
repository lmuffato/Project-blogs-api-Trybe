const joi = require('joi');

const newUserValidate = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().length(6).required(),
});

const loginValidate = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

module.exports = {
  newUserValidate,
  loginValidate,
};