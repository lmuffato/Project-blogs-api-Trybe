const createPost = require('./createPost');
const findAllPosts = require('./findAllPosts');
const findByPkPost = require('./findByPkPost');
const updatePost = require('./updatePost');
const removePost = require('./removePost');
const searchTermPost = require('./searchTermPost');

module.exports = {
  createPost,
  findAllPosts,
  findByPkPost,
  updatePost,
  removePost,
  searchTermPost,
};