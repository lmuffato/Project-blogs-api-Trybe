const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

module.exports = { userSchema };