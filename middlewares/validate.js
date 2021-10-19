const Joi = require('joi');

const validateUser = (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(6).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (error) return next(error);
  next();
};

module.exports = { validateUser };