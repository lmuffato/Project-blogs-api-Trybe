const joi = require('@hapi/joi');
const { BlogPost, Category, PostCategory, User } = require('../models');
const { addErro, validateTokenAndReturnId, validateToken } = require('../util');

const validateBlogPot = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.required(),
});

const createBlogPost = async ({ title, content, categoryIds }, token) => {
  const userId = validateTokenAndReturnId(token);

  const { error } = validateBlogPot.validate({ title, content, categoryIds });

  if (error) {
    const { message } = error.details[0];
    throw addErro(message, 400);
  }

  const idCategoryes = await Category.findAll();

  categoryIds.forEach((idCat) => {
    const result = idCategoryes.some(({ id }) => (idCat === id));

    if (!result) throw addErro('"categoryIds" not found', 400);
  });

  const newBlogPost = await BlogPost.create({ title, content, userId });
  const { id } = newBlogPost.dataValues;

  const addPostCategory = await categoryIds.map(async (idCat) => (
    PostCategory.create({ postId: id, categoryId: idCat })
  ));
  await Promise.all(addPostCategory);

  return newBlogPost;
};

const findAllPost = async (token) => {
  validateToken(token);
    const posts = await BlogPost.findAll({ include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ] });

  return posts;
};

module.exports = {
  createBlogPost,
  findAllPost,
};
