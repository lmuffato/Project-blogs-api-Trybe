const Joi = require('joi');

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (error) return next(error);
  next();
};

const validateEmail = (req, _res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(6).required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = { validateUser, validateEmail };