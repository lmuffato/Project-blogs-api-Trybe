const { Category, BlogPost, User } = require('../models');

// verifyCategories foi inspiração no codigo do colega abaixo
// // https://github.com/tryber/sd-010-a-project-blogs-api/blob/rodolfo-oliveira-blogs-api/src/services/postService.js

const verifyCategories = async (arrCatIds) => {
  const categoriesOk = await Category.findAll({ where: { id: arrCatIds } });
  return categoriesOk.length === arrCatIds.length;
};

const createPostS = async (newPost) => {
  const { categoryIds } = newPost; // its array
  // console.log('------------ create post ----------');
  const itsOk = await verifyCategories(categoryIds);
  if (!itsOk) {
    return null;
  }
  const createdPost = await BlogPost.create(newPost);
  return createdPost;
};
// https://sequelize.org/v5/manual/querying.html#relations---associations
const getAllPostsS = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostS = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
}; 

module.exports = {
  createPostS,
  getAllPostsS,
  getPostS,
};