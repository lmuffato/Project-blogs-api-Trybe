const Joi = require('@hapi/joi');

const schemaCreateUser = Joi.object({
  displayName: Joi.string()
      .min(8)
      .required(),
  email: Joi.string()
      .email()
      .required(),
  password: Joi.string()
      .required()
      .min(6)
      .message('"password" length must be 6 characters long'),
  image: Joi.string(),
});

const schemaLogin = Joi.object({
  email: Joi.string()
      .email()
      .required(),
  password: Joi.string()
      .required()
      .min(6)
      .message('"password" length must be 6 characters long'),
});

const schemaCreateCategory = Joi.object({
  name: Joi.string()
      .required(),
});

module.exports = {
  schemaCreateUser,
  schemaLogin,
  schemaCreateCategory,
};
