const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().not().empty().required(),
  password: Joi.string().not().empty().required(),
});

module.exports = loginSchema;
