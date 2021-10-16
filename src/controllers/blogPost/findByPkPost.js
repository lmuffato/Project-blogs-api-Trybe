const BlogPostService = require('../../services/blogPost');

module.exports = async (req, res) => {
  const { id } = req.params;
  const post = await BlogPostService.findByPkPost(id);

  if (!post) res.status(404).json({ message: 'Post does not exist' });

  res.status(200).json(post);
};