const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const category = await Category.create({ name });

  res.status(201).json(category);
};

const getCategories = async (_req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch(() => {
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const findCategory = async (categoryId) => Category.findByPk(categoryId);

module.exports = {
  create,
  getCategories,
  findCategory,
}; 