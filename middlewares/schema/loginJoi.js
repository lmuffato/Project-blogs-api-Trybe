const Joi = require('joi');

const loginJoi = Joi.object().keys({
  email: Joi.string().not().empty().email()
    .required(),
  password: Joi.string().length(6).not().empty()
    .required(),
});

module.exports = { loginJoi };