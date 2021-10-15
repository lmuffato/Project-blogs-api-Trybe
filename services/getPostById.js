const { BlogPost, User, Category } = require('../models');
const { POST_DOES_NOT_EXISTS } = require('../utils/errorMessages');

module.exports = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) throw POST_DOES_NOT_EXISTS;

  return post;
};