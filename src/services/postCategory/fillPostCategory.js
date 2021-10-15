const { PostCategory } = require('../../models');

module.exports = async (postIdAndCategoriesIds) => {
  const fillPostCategory = PostCategory.create(postIdAndCategoriesIds);

  return fillPostCategory;
};  