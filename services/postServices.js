const jwt = require('jsonwebtoken');
require('dotenv');
const { BlogPost, User, Category } = require('../models');
const error = require('./error');

const isValidCategory = async (categoryIds) => {
  const categoryAlreadyExists = await Category.findAll();
  const categoriesIds = categoryAlreadyExists.map((category) => category.id);
  const isValidId = categoryIds.every((id) => categoriesIds.includes(id));
  return isValidId;
  };

const createPost = async (blogPost, authorization) => {
  const { title, content, categoryIds } = blogPost;
  if (!title) return error.requiredTitle;
  if (!content) return error.requiredContent;
  if (!categoryIds) return error.requiredCategoryIds;
  const isValidId = await isValidCategory(categoryIds);
  if (!isValidId) return error.categoryIdsNotFound;
  const verifyToken = jwt.verify(authorization, process.env.JWT_SECRET);
    const { email } = verifyToken;
    const userInfo = await User.findOne({ where: { email } });
    const { id } = userInfo;
    const newPost = await BlogPost.create(
      { title, content, userId: id, published: Date.now(), updated: Date.now() },
);
  return newPost;
 };

 const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  }); 
  return result;
}; 

module.exports = {
    createPost,
    getAllPosts,
  };  