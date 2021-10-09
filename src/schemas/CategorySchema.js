const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().not().empty().required(),
});

module.exports = categorySchema;
