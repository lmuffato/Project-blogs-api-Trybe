const { BlogPost, Category, User } = require('../models');

async function listAllPosts() {
  return BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
}

async function savePost(post) {
  return BlogPost.create({ ...post });
}

module.exports = { listAllPosts, savePost };