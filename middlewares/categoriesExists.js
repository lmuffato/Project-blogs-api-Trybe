const { Category } = require('../models');

module.exports = (req, res, next) => {
  const { categoryIds } = req.body;
  categoryIds.forEach(async (id) => {
    if (await Category.findByPk(id) === null) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }
  });
  return next();
};
