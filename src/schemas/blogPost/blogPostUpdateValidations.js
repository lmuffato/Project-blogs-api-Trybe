const Joi = require('joi');

module.exports = (blogPost) => Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).validate(blogPost);