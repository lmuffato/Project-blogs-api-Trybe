const { Category } = require('../models');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await Category.create({ name });
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ message: '"name" is required' });
  }
};

const listCategories = async (_req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const findCategory = async (id) => Category.findOne({ where: { id } });

module.exports = {
  createNewCategory,
  listCategories,
  findCategory,
};
