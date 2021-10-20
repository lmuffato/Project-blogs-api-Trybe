const Joi = require('joi');

const userJoi = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().length(6),
  image: Joi.string(),
});

const loginJoi = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { userJoi, loginJoi };
