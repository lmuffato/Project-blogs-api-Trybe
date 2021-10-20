const CategoryService = require('../services/categoryService');

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await CategoryService.createCategory(name);
    return res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = {
  createCategories,
};