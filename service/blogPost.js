const joi = require('@hapi/joi');
const { BlogPost, Category } = require('../models');
const { addErro, validateTokenAndReturnId } = require('../util');

const validateBlogPot = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.required(),
});

const createBlogPost = async (date, token) => {
  const userId = validateTokenAndReturnId(token);

  const { title, content, categoryIds } = date;
  const { error } = validateBlogPot.validate({ title, content, categoryIds });

  if (error) {
    const { message } = error.details[0];
    throw addErro(message, 400);
  }

  const idCategoryes = await Category.findAll();

  idCategoryes.forEach(({ id }) => {
    const idCategorye = categoryIds.some((idUser) => (idUser === id));

    if (!idCategorye) throw addErro('"categoryIds" not found', 400);
  });

  const newBlogPost = await BlogPost.create({ title, content, userId });

  return newBlogPost;
};

module.exports = {
  createBlogPost,
};
