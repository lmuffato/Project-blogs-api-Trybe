const { Category, BlogPost, User } = require('../models');
const errorMessage = require('../utils/errorMessages');

const verifyIfCategoryIdExists = async (categoryIds) => {
  const validate = [];
   
  categoryIds.forEach((id) => validate.push(Category.findOne({ where: { id } })));

  return Promise.all(validate).then((i) => i);
};

module.exports = async (title, categoryIds, content, email) => {
  const categories = await verifyIfCategoryIdExists(categoryIds);
  const handleCategories = categories.find((n) => n);

  if (!handleCategories) throw errorMessage.CATEGORYIDS_NOT_FOUND;

  const { dataValues: { id } } = await User.findOne({ where: { email } });

  const blogPost = await BlogPost.create({ title, content, userId: id });

  return blogPost;
};