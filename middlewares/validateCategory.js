const database = require('../models');

const validateCategoryName = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  try {
  const existingCategory = await database.Categories.findOne({ where: name });
  console.log(existingCategory);
  if (existingCategory) return res.status(400).json({ message: 'Category already exists' });
  } catch (e) {
    console.log(e);
  }
  next();
};

module.exports = {
  validateCategoryName,
};
