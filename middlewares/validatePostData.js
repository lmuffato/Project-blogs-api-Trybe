const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCode');
const { ValidateError } = require('../utils');

const userSchema = Joi.object({
  title: Joi.string().not().empty().required(),
  content: Joi.string().not().empty().required(),
  categoryIds: Joi.array().not().empty().required(),
});

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = userSchema.validate({ title, content, categoryIds });
  
  if (error) {
    return next(ValidateError(BAD_REQUEST, error.details[0].message));
  }
  next();
};