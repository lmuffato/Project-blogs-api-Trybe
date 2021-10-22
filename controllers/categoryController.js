const Category = require('../services/categoryService');

async function createCategory(req, res) {
  const { status, data, message } = await Category.createCategory(req.body);
  if (message) return res.status(status).json({ message });
  return res.status(status).json(data);
}

module.exports = { createCategory };