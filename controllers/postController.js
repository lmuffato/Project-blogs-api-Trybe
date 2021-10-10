const Posts = require('../services/postService');

const create = async (req, res) => {
  const { status, data, message } = await Posts.create(req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
}; 