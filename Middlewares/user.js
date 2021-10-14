const Joi = require('joi');

const schemaNewUser = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be 6 characters long',
  }),
  image: Joi.string(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateUser = (req, _res, next) => {
  const isValid = schemaNewUser.validate(req.body);

  if (isValid.error) return next(isValid.error);
  next();
};

const validateLogin = (req, _res, next) => {
  const isValid = schemaLogin.validate(req.body);

  if (isValid.error) return next(isValid.error);
  next();
};

module.exports = {
  validateUser,
  validateLogin,
};
