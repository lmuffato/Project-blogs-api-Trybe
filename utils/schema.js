const Joi = require('joi');

const User = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
});

const Login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

module.exports = {
  User,
  Login,
};
