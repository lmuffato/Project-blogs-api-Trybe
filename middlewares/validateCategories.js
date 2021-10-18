const { categoriesJoi } = require('./schema/categoriesJoi');

const validateCategories = (req, res, next) => {
  const { error } = categoriesJoi.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  return next();
};

module.exports = validateCategories;