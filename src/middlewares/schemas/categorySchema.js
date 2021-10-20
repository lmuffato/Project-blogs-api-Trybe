const Joi = require('joi');

const newCategorySchema = Joi.object({
  name: Joi.string().not().empty()
    .required(),
});

module.exports = {
  newCategorySchema,
};