const { createCategory, getAllCategories } = require('../services/categoryService');
const { STATUS_CREATED, STATUS_OK } = require('../utils/msg');

const createCategories = async (req, res) => {
  const addCategory = req.body;
  const category = await createCategory(addCategory);
  return res.status(STATUS_CREATED).json(category);
};

const findAllCategories = async (_req, res) => {
  const categories = await getAllCategories();
  return res.status(STATUS_OK).json(categories);
};

module.exports = { createCategories, findAllCategories };