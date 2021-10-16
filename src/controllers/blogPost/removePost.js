const BlogPostService = require('../../services/blogPost');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const removedPost = await BlogPostService.removePost(id, userId);

  if (removedPost.status) {
    return res
      .status(removedPost.status)
      .json({ message: removedPost.message });
  }

  res.status(204).end();
};
