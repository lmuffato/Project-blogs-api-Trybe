const BlogPostService = require('../../services/blogPost');

module.exports = async (req, res) => {
  const { q } = req.query;

  const posts = await BlogPostService.searchTermPost(q);

  res.status(200).json(posts);
};