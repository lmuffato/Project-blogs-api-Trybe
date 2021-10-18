const { Category } = require('../models');
const httpStatus = require('../utils/httpStatus');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  
  res.status(httpStatus.created).json(category);
};

const getAllCategories = async (_req, res) => {
  const allCategories = await Category.findAll();
  res.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getAllCategories,
};
