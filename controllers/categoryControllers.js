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

module.exports = {
  createNewCategory,
};
