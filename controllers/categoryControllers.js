const { createCategory } = require('../services/categoryService');
const { STATUS_CREATED } = require('../utils/msg');

const createCategories = async (req, res) => {
  const addCategory = req.body;
  const category = await createCategory(addCategory);
  return res.status(STATUS_CREATED).json(category);
};

module.exports = { createCategories };