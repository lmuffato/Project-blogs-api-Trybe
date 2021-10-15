const { PostsCategory } = require('../models');

const createPostsCategory = async (postId, categoryId) => {
  try {
    await PostsCategory.create({ postId, categoryId });
  } catch (e) {
    console.log('Error:', e);
  }
};

module.exports = createPostsCategory;
