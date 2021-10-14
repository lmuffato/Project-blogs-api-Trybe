const Joi = require('joi');

const categoriesSchema = Joi.object({
  name: Joi.required(),
});

module.exports = { categoriesSchema };
