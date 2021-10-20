const { newCategorySchema } = require('./schemas/categorySchema');

module.exports = async (req, res, next) => {
  const newCategory = req.body;
  const { error } = newCategorySchema.validate(newCategory);

  if (error) {
    return next({ code: 400, message: error.details[0].message });
  }

  next();
};
