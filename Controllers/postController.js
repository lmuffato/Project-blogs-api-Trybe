const Post = require('../Services/postService');

const addNew = async (req, res, next) => {
  const { user, body } = req;
  const result = await Post.create(body, user);
  if (result.message) return next(result);

  return res.status(201).json(result);
};

const listAll = async (_req, res, next) => {
  const result = await Post.listAll();

  if (result.message) return next(result);

  return res.status(200).json(result);
};

const listById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Post.listById(id);

  if (result.message) return next(result);

  return res.status(200).json(result);
};

module.exports = {
  addNew,
  listAll,
  listById,
};
