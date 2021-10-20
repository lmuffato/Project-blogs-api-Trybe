const { createPostService } = require('../services/post');

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.post;

  const { status, data, message } = await createPostService(title, content, categoryIds, userId);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  createPostController,
};
