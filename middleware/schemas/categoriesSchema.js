const Joi = require('joi');

const categoriesSchema = Joi.object().keys({
  name: Joi.string().not().empty()
    .required(),
});

module.exports = { categoriesSchema };
