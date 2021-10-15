const Joi = require('joi');

module.exports = Joi.object({
  title: Joi
    .string()
    .required(),
  content: Joi
    .string()
    .required(),
  categoryIds: Joi
    .array()
    .items(Joi.number())
    .required(),
});
