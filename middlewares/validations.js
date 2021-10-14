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

const validateLogin = (req, _res, next) => {
    const numberPassword = 6;
  
    const { error } = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).required(),
      password: Joi.string().length(numberPassword).required(),
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
  
  const validatePostPut = (req, _res, next) => {
    if (req.body.categoryIds) {
      return next({
        code: 400,
        message: 'Categories cannot be edited',
      });
    }
  
    const { error } = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
    }).validate(req.body);
  
    if (error) return next(error);
  
    next();
  };
  
  module.exports = {
    validateLogin,
    validateCreateUser,
    validateCategories,
    validatePost,
    validatePostPut,
  };
