const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCode');
const { ValidateError } = require('../utils');

const userSchema = Joi.object({
  email: Joi.string()
    .email()
    .not().empty()
    .required(),
  password: Joi.string()
    .not().empty()
    .required(),
});

const validateUserAccess = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = userSchema.validate({ email, password });
  
  if (error) {
    return next(ValidateError(BAD_REQUEST, error.details[0].message));
  }
  next();
};

module.exports = validateUserAccess;