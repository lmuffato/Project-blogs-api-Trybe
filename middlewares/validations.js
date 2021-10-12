const Joi = require('joi');

const validateCreateUser = (req, _res, next) => {
  const numberName = 8;
  const numberPassword = 6;

  const { error } = Joi.object({
    displayName: Joi.string().min(numberName).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(numberPassword).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = { validateCreateUser };