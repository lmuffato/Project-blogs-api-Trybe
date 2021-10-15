const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const data = req.body;
  const { status, message, category } = await categoryService.createCategory(data);
  return res.status(status).json(message ? { message } : (category));
};

module.exports = {
  createCategory,
};