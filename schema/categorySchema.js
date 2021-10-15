const Joi = require('joi');

const categorySchema = Joi.object().keys({
  name: Joi.string().required(),
});

module.exports = { 
  categorySchema,
};