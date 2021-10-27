const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCode');
const { ValidateError } = require('../utils');

const userSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  content: Joi.string().not().empty().required(),
});

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  if (categoryIds) next(ValidateError(BAD_REQUEST, 'Categories cannot be edited'));

  const { error } = userSchema.validate({ title, content });
  if (error) {
    return next(ValidateError(BAD_REQUEST, error.details[0].message));
  }

  next();
};