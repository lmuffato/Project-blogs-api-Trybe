const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { categoriesSchema } = require('../schemas/categoriesSchema');

const validateCategory = rescue(async (req, _res, next) => {
  const { error } = categoriesSchema.validate(req.body);

  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });
  
  next();
});

module.exports = validateCategory;