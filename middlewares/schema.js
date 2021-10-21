const Joi = require('joi');

const User = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
});

const Login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const Categories = Joi.object({
  name: Joi.string().required(),
});

const Post = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

module.exports = { User, Login, Categories, Post };