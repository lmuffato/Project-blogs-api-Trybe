const findAllPosts = require('../../services/blogPost');

module.exports = async (_req, res) => {
  const blogPosts = await findAllPosts.findAllPosts();

  res.status(200).json(blogPosts);
};