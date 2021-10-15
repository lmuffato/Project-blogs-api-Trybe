const Joi = require('joi');

const User = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
});

module.exports = { User };