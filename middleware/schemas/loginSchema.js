const Joi = require('joi');

const loginSchema = Joi.object().keys({
  email: Joi.string().not().empty().email()
    .required(),
  password: Joi.string().length(6).not().empty()
    .required(),
});

module.exports = { loginSchema };
