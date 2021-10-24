const Posts = require('../services/servicePost');

const createPost = async (req, res) => {
const { categoryIds, title, content } = req.body;
const { id: userId } = req.user;
  const result = await Posts.createPost({ categoryIds, title, content }, { userId });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json(result.post);
};

module.exports = {
  createPost,
};