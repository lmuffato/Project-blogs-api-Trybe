const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).message('"password" length must be 6 characters long').required(),
  image: Joi.string().required(),
});

module.exports = { userSchema };
