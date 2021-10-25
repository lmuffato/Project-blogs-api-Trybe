const Categories = require('./categories');
const { BlogPost } = require('../models');
const { ValidateError } = require('../utils');
const { BAD_REQUEST } = require('../utils/statusCode');

const verifyCategory = async (categoryIds) => {
  const CategoriesAll = await Categories.getAll()
    .then((res) => res.map(({ id }) => id));
  const category = categoryIds.every((id) => CategoriesAll.includes(id));
  return category;
};

const create = async (postData) => {
  const { title, content, categoryIds, userId } = postData;
  const check = await verifyCategory(categoryIds);
  if (!check) throw ValidateError(BAD_REQUEST, '"categoryIds" not found');

  const newPost = await BlogPost.create({ title, content, userId });

  return newPost;
};

module.exports = {
  create,
};