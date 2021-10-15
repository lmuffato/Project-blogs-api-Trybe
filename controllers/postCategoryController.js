const { PostsCategory } = require('../models');

const createPostsCategory = async (post, categories) => {
  categories.map(async (id) => {
    await PostsCategory.create({
      categoryId: id,
      postId: post.id,
    });
  });
};

module.exports = createPostsCategory;
