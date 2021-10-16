const BlogPostService = require('../../services/blogPost');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;

  if (req.body.categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  const updatedPost = await BlogPostService.updatePost(
    { title, content },
    id,
    userId,
  );

  if (updatedPost.status) {
    return res
      .status(updatedPost.status)
      .json({ message: updatedPost.message }); 
  }

  res.status(200).json(updatedPost);
};