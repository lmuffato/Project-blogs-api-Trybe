const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const validatePost = (title, content, categoryIds) => {
  const postData = { title, content, categoryIds };

  return postSchema.validate(postData);
};

module.exports = {
  validatePost,
};
