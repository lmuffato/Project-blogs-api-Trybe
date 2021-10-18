const { BlogPost, Category, User } = require('../models');

/* Source: https://github.com/tryber/sd-09-project-blogs-api/tree/henriquebelias-blogs-api */
const createPost = async ({ title, content, categoryIds }) => {
  const categoryExistsResponse = categoryIds.map((id) => Category.findByPk(id));
  const categoryExists = await Promise.all(categoryExistsResponse);

  if (categoryExists.includes(null)) {
    return {
      error: {
        code: 'badRequest',
        message: '"categoryIds" not found',
      },
    };
  }

  await BlogPost.create({ title, content });
  const post = BlogPost.findOne({ where: { title, content } });

  return post;
};

/* Source: https://github.com/tryber/sd-09-project-blogs-api/tree/henriquebelias-blogs-api */
const getAllPosts = () => BlogPost
  .findAll(
    {
      attributes: { include: ['published', 'updated'] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

module.exports = {
  createPost,
  getAllPosts,
};