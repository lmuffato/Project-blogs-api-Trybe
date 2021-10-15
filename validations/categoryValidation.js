const { categorySchema } = require('../schema/categorySchema');

const categoryValidation = (req, res, next) => {
  const categoryName = req.body;
  const { error } = categorySchema.validate(categoryName);
  if (error) next(res.status(400).json({ message: error.details[0].message }));
  
  next();
};

module.exports = { 
  categoryValidation,
};