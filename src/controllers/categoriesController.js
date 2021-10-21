const Category = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { status, data, message } = await Category.createCategory(req.body);

  if (message) {
    return res.status(status).json({ message });
  }

  res.status(status).json(data);
};

const getAllCategories = async (_req, res) => {
  const { status, data } = await Category.getAllCategories();

  res.status(status).json(data);
};

module.exports = {
  createCategory,
  getAllCategories,
};
