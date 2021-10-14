const Joi = require('joi');

module.exports = (user) => Joi.object({
  name: Joi.string().required(),
}).validate(user);