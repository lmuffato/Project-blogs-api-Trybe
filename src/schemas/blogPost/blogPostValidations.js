const Joi = require('joi');

module.exports = (blogPost) => Joi.object({
  title: Joi.string().required(),
  categoryIds: Joi.array().required(),
  content: Joi.string().required(),
  userId: Joi.number(),
}).validate(blogPost);