const Joi = require('joi');

const userValidate = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).message('"password" length must be 6 characters long'),
    image: Joi.string(),
    }); 

const loginValidate = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const categoryValidate = Joi.object({
  name: Joi.string().required(),
});

const postValidate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

module.exports = { userValidate, loginValidate, categoryValidate, postValidate };