const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { categorySchema } = require('../validations/schema');

const validCategoryName = async (req, _res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  next();
};

module.exports = validCategoryName;