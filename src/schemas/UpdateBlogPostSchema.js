const Joi = require('joi');

const UpdateBlogPostSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  content: Joi.string().not().empty().required(),
});

module.exports = UpdateBlogPostSchema;
