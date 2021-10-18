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
  const postId = await post.dataValues.id;
  const postcategorys = categoryIds.map(async (categoryId) => {
    await PostsCategories.create({ postId, categoryId });
  });

  await Promise.all(postcategorys);

  return { ID: post.dataValues.id, userId };
};

module.exports = {
  createPosts,
};
