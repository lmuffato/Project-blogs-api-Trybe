const Joi = require('joi');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).not().empty()
.required(),
  email: Joi.string().email().not().empty()
.required(),
  password: Joi.string().length(6).not().empty()
.required(),
  image: Joi.string(),
});

module.exports = newUserSchema;