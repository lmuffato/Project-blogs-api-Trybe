const postService = require('../services/postService');

const create = async (req, res) => {
  const { status, data } = await postService.create(req.body, req.user.id);
  const { id, userId, title, content } = data;
  res.status(status).json({ id, userId, title, content });
};

module.exports = {
  create,
};