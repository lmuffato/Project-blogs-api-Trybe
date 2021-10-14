const Joi = require('joi');

module.exports = Joi.object({
    displayName: Joi
      .string()
      .min(8)
      .required(),
    email: Joi
      .string()
      .email()
      .required(),
    password: Joi
      .string()
      .required()
      .min(6)
      .message('"password" length must be 6 characters long'),    
    image: Joi.string(),
});
