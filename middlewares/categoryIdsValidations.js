const { Category } = require('../models');

const validateCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res
      .status(400).json({ message: '"categoryIds" is required' });
  }

  next();
};

const existsCategory = (req, res, next) => {
  const { categoryIds } = req.body;
  categoryIds.map(async (categories) => {
    const category = await Category.findOne({ where: { id: categories } });
    if (category === null) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
    next();
  });
};

const notExistsCategory = (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
  next();
};

module.exports = { validateCategoryIds, existsCategory, notExistsCategory };