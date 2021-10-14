const Joi = require('joi');

const postUserValidate = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().min(1).required(),
});

const postLoginValidate = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const postCategorieValidate = Joi.object({
  name: Joi.string().required(),
});

const postBlogPostValidate = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
})

module.exports = {
  postUserValidate,
  postLoginValidate,
  postCategorieValidate,
  postBlogPostValidate,
};
