const post = require('../services/postService');

const updateById = async (req, res) => {
  const { id } = req.params;
  const { id: currUserId } = req.user;

  if (Number(currUserId) !== Number(id)) {
    return res.status(401)
    .json({ message: 'Unauthorized user' });
  }
  const { title, content, categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  const { status, data, message } = await post.updateById(req.params.id, req.body);
  
  if (message) return res.status(status).json({ message });
  
  const categoryId = data.data.dataValues.categories;
  res.status(status).json({ userId: Number(id), title, content, categories: categoryId });
};

const getById = async (req, res) => {
  const { status, data, message } = await post.getById(req.params.id);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await post.getAll();

  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data, message } = await post.create(req.body, req.user);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
}; 