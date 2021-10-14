const Joi = require('joi');

const newCategorySchema = Joi.object({
  name: Joi.string().required(),
});

const validateCategory = (req, _res, next) => {
  const isValid = newCategorySchema.validate(req.body);

  if (isValid.error) return next(isValid.error);
  next();
};

module.exports = {
  validateCategory,
};
