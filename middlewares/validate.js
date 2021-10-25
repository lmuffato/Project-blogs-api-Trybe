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

const validateCategories = (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

const validatePost = (req, _res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    categoryIds: Joi.array().min(1).required(),
    content: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  validateUser,
  validateEmail,
  validateCategories,
  validatePost,
};
