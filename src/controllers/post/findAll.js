const BlogPostService = require('../../services/post');

const findAll = async (_req, res) => {
  const postList = await BlogPostService.findAll();

  return res.status(200).json(postList);
};

module.exports = findAll;
