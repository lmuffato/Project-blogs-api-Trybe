const Joi = require('joi');

const schemaPost = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const updateSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.any().forbidden().messages({
    'any.unknown': 'Categories cannot be edited',
  }),
});

const validatePost = (req, _res, next) => {
  const isValid = schemaPost.validate(req.body);

  if (isValid.error) return next(isValid.error);
  next();
};

const validateUpdate = (req, _res, next) => {
  const isValid = updateSchema.validate(req.body);

  if (isValid.error) return next(isValid.error);
  next();
};

module.exports = {
  validatePost,
  validateUpdate,
};
