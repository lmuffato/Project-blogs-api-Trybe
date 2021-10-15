const Post = require('../Services/postService');

const addNew = async (req, res, next) => {
  const { user, body } = req;
  const result = await Post.create(body, user);
  if (result.message) return next(result);

  return res.status(201).json(result);
};

const listAll = async (req, res, next) => {
  const { q } = req.query;
  const result = await Post.listAll(q);

  if (result.message) return next(result);

  return res.status(200).json(result);
};

const listById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Post.listById(id);

  if (result.message) return next(result);

  return res.status(200).json(result);
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { id: userId } = req.user;
  
  const result = await Post.update(id, { title, content }, userId);

  if (result.message) return next(result);

  return res.status(200).json(result);
};

const exclude = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const result = await Post.exclude(id, userId);

  if (result && result.message) return next(result);

  return res.status(204).end();
};

module.exports = {
  addNew,
  listAll,
  listById,
  update,
  exclude,
};
