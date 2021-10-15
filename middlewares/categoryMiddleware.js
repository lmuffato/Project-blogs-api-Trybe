const { categoryValidate } = require('../validateJOI/validateUserJoi');

const validCategoryName = async (req, _res, next) => {
  const { error } = categoryValidate.validate(req.body);
  if (error) return next({ statusCode: 400, message: error.message });
  next();
};

module.exports = validCategoryName; 