const { Category } = require('../models');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoriesFound = categoryIds.map(async (id) => await Category.findByPk(id) !== null);
  let categoryNotFound = false;
  
  await Promise.all(categoriesFound).then((result) => {
    if (result.includes(false)) categoryNotFound = true;
  });
  
  if (categoryNotFound) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};
