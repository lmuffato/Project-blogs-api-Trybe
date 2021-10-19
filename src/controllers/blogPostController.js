const blogPostService = require('../services/blogPostService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { status, message, blogPost } = await blogPostService.create(
    title, content, categoryIds, id,
  );
  if (!blogPost) return res.status(status).json({ message });
  res.status(status).json(blogPost);
};

const getAll = async (req, res) => {
  const { id } = req.user;

  const { status, message, blogPosts } = await blogPostService.getAll(id);
  if (!blogPosts) return res.status(status).json({ message });
  res.status(status).json(blogPosts); 
};

module.exports = {
  create,
  getAll,
};