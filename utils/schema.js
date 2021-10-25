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

const Category = Joi.object({
  name: Joi.string().required(),
});

const BlogPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const UpdateBlogPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  User,
  Login,
  Category,
  BlogPost,
  UpdateBlogPost,
};
