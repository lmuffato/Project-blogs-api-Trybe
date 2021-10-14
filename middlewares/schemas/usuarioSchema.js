// Agradecimento a aluna Pollyana por me explicar o funcionamento do Joi

const Joi = require('joi');

const usuarioSchema = Joi.object().keys({
  displayName: Joi.string().min(8).not().empty()
    .required(),
  email: Joi.string().not().empty().email()
    .required(),
  password: Joi.string().length(6).not()
    .empty()
    .required(),
  image: Joi.string(),
});

module.exports = { usuarioSchema };