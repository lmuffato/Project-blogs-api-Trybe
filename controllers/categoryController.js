const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.create({ name });
  if (newCategory.message) {
    const { message, code } = newCategory;
    return res.status(code).json({ message });
  }
  return res.status(201).json(newCategory);
};

module.exports = {
  create,
};
