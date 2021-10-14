const Joi = require('joi');

module.exports = (user) => Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),

}).validate(user);