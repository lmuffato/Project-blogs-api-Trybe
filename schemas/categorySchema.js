const Joi = require('joi');

const categorySchema = Joi.object().keys({
  name: Joi.string().not().empty()
    .required(),
});

module.exports = { categorySchema };