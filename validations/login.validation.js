const Joi = require('joi');

module.exports = Joi.object({
    email: Joi
      .string()      
      .required(),
    password: Joi
      .string()
      .required(),    
});
