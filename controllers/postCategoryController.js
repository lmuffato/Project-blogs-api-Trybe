const { PostCategory } = require('../models');

const createPostsCategories = async (post, categories) => {
  categories.map(async (id) => {
    await PostCategory.create({
      categoryId: id,
      postId: post.id,
    });
  });
};

module.exports = createPostsCategories;
