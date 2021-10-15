const postService = require('../services/postService');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const { post, err } = await postService.createPost(title, content, categoryIds, id);

  if (err) return res.status(400).json(err);

  return res.status(201).json(post);
};

module.exports = {
  create,
};
