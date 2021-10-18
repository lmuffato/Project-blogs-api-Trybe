const Joi = require('joi');

const categoriesJoi = Joi.object().keys({
  name: Joi.string().not().empty()
    .required(),
});

module.exports = { categoriesJoi };