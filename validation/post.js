const joi = require('joi');

const newPostValidate = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.required(),
});

const updatePost = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

module.exports = {
  newPostValidate,
  updatePost,
};