const { categoryidIsRequired } = require('../utils/errorMap');

const validateCategoryId = (req, _res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || typeof categoryIds !== 'object') {
    next(categoryidIsRequired.error);
  }

  next();
};

module.exports = { validateCategoryId };
