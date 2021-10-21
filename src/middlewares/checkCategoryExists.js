const { getCategory } = require('../services/Categories');
const { notFoundCategory } = require('../utils/errors');

const checkCategoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categories = await getCategory(categoryIds);

  const nonExistentCategory = categoryIds.filter(
    (categoryId) => !categories.some(({ id }) => id === categoryId),
  );

  if (nonExistentCategory.length) {
    return res
      .status(notFoundCategory.code)
      .json({ message: notFoundCategory.message });
  }

  next();
};

module.exports = checkCategoryExists;
