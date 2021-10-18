const { Category } = require('../models');

async function createCategory(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });
  return res.status(201).json(category);
}

async function findAllCategories(_req, res) {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}

module.exports = {
  createCategory,
  findAllCategories,
};
