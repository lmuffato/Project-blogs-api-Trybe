const CategoryService = require('../../services/category');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await CategoryService.createCategory({ name });

  return res.status(201).json(newCategory);
};

module.exports = createCategory;