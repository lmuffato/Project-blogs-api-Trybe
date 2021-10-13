const { BlogPosts, Users, Categories, PostsCategories } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const { dataValues } = await BlogPosts.create({ title, content, userId });

  const { id } = dataValues;

  categoryIds.forEach(async (category) => {
    await PostsCategories.create({ postId: id, categoryId: category });
  });

  return { id, userId, title, content };
};

const getAllPost = async () => {
    const getAll = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return getAll;
};

module.exports = {
    createPost,
    getAllPost,
};
