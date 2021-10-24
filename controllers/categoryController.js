const Category = require('../services/serviceCategory');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await Category.create({ name });
  if (result.message) return res.status(result.status).json({ message: result.message });

  res.status(result.status).json(result.category);
};

module.exports = {
  createCategory,
};