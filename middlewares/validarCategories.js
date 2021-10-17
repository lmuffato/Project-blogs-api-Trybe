const { categoriesSchema } = require('./schemas/categoriesSchema');

const validarCategories = (request, response, next) => {
  const { error } = categoriesSchema.validate(request.body);
  if (error) return response.status(400).json({ message: error.details[0].message });
  
  return next();
};

module.exports = validarCategories;