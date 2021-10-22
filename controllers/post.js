const { createPostService, getAllPostService } = require('../services/post');

// ---------------------------------------- CREATE ------------------------------------------------ //

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const post = { title, content, categoryIds };
  const { status, data, message } = await createPostService(post, { id });

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

// ---------------------------------------- GETALL ------------------------------------------------ //

const getAllPostController = async (_req, res) => {
  const { status, data } = await getAllPostService();

  res.status(status).json(data);
};

module.exports = {
  createPostController,
  getAllPostController,
};
