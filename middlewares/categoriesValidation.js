const { categoriesSchema } = require('./schemas/categoriesSchema');

const categoriesValidation = (req, res, next) => {
  const { error } = categoriesSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  return next();
};

module.exports = categoriesValidation;