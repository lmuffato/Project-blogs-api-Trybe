const { Category } = require('../models');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'name is required' });
    }

    const category = Category.create({ name });
    return res.status(201).json(category);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  create,
  getAll,
}
