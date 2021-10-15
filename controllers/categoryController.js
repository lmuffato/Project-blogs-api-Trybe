const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const data = req.body;
  const { message, statusCode, category } = await categoryService.createCategory(data);
  return res.status(statusCode).json(message ? { message } : (category));
};

module.exports = {
  createCategory,
};
