require('dotenv').config();

const jwt = require('jsonwebtoken');
const { BlogPosts, PostsCategories } = require('../models');

const validations = require('./validations');

const JWTSECRET = process.env.JWT_SECRET;

const createPosts = async (title, content, categoryIds, token) => {
  const payload = jwt.verify(token, JWTSECRET);
  const { id } = payload;
  const userId = id;
  const validateInsertedBodyError = validations
    .validateBodyCreatePosts({ title, content });
  if (validateInsertedBodyError) {
    return { numberStatus: 400, message: validateInsertedBodyError.details[0].message };
  }
  const validateByCategory = await validations.validateByCategory(categoryIds);
  if (validateByCategory) return validateByCategory;
  const post = await BlogPosts.create({ title, content, userId });
  
  categoryIds.forEach(async (categoryId) => {
    const postId = await post.dataValues.id;
    await PostsCategories.create(postId, categoryId);
  });

  return { ID: post.dataValues.id, userId };
};

module.exports = {
  createPosts,
};
