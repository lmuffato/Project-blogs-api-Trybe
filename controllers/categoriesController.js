const { Category } = require('../models');

async function createCategory(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const category = await Category.create({ name });
  return res.status(201).json(category);
}

module.exports = {
  createCategory,
};
