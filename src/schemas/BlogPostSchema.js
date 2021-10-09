const Joi = require('joi');

const BlogPostSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  content: Joi.string().not().empty().required(),
  categoryIds: Joi.array().not().empty().required(),
});

module.exports = BlogPostSchema;
