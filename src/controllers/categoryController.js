const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;

  const { status, message, category } = await categoryService.create(name);
  if (!category) return res.status(status).json({ message });
  res.status(status).json(category);
};

module.exports = {
  create,
};