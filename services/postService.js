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

const getById = async (id) => {
    const getPost = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return getPost;
};

const editPost = async (id, title, content) => {
    await BlogPosts.update({ title, content }, { where: { id } });
  
    const allCategories = await BlogPosts.findOne({
      where: { id },
      attributes: { exclude: ['id', 'published', 'updated'] },
      include: [{ model: Categories, as: 'categories', through: { attributes: [] } }],
    });
  
    return allCategories;
};

const deletePost = async (id) => {
  await BlogPosts.destroy({ where: { id } });  
};
  
module.exports = {
  createPost,
  getAllPost,
  getById,
  editPost,
  deletePost,
};
