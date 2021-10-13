const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: '"name" is required' });
  }
  try {
    const category = await Category.create({ name });
    return res.status(201).json(category);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (_req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { create, getAll };