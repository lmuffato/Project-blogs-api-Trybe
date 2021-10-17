const { BlogPost, User, Category } = require('../models');

module.exports = async () => {
  const posts = await BlogPost.findAll(
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    },
  );

  return posts;
};