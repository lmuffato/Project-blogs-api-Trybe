const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCode');
const { ValidateError } = require('../utils');

const userSchema = Joi.object({
  name: Joi.string().not().empty().required(),
});

module.exports = (req, _res, next) => {
  const { name } = req.body;
  const { error } = userSchema.validate({ name });
  
  if (error) {
    return next(ValidateError(BAD_REQUEST, error.details[0].message));
  }
  next();
};