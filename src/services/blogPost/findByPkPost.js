const { BlogPost, User, Category } = require('../../models');

module.exports = async (id) => {
  const post = await BlogPost.findOne(
    {
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  return post;
};