const Joi = require('joi');
const { BAD_REQUEST } = require('../utils/statusCode');
const { ValidateError } = require('../utils');

const userSchema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  image: Joi.string().required(),
});

const validateUser = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;
  const { error } = userSchema.validate({ displayName, email, password, image });
  
  if (error) {
    return next(ValidateError(BAD_REQUEST, error.details[0].message));
  }
  next();
};

module.exports = validateUser;

// custom erro messages:
// https://stackoverflow.com/questions/48720942/node-js-joi-how-to-display-a-custom-error-messages