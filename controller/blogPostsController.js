const blogPostService = require('../services/blogPostsService');
const { HTTP_OK_STATUS } = require('../helpers');

const getAllPosts = async (req, res) => {
  const get = await blogPostService.getAll();
  // console.log('🚀 ~ file: blogPostsController.js ~ line 6 ~ getAllPosts ~ get', get);

  res.status(HTTP_OK_STATUS).json(get);
};

module.exports = {
  getAllPosts,
};
