const Joi = require('joi');

const blogPostValidation = ({ title, content, categoryIds }) => {
  const { error } = Joi.object({
    title: Joi.string().required().messages(
      { 'title.required': '"title" is required' },
),
    content: Joi.string().required().messages(
      { 'content.required': '"content" is required' },
),
    categoryIds: Joi.array().required().messages(
      { 'categoryIds.required': '"categoryId" is required' },
),
  }).validate({ title, content, categoryIds });

  if (error) throw error;
};

module.exports = {
  blogPostValidation,
};
