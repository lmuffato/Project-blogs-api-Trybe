const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const validateUser = (displayName, email, password) => {
  const userData = { displayName, email, password };

  return userSchema.validate(userData);
};

module.exports = {
  validateUser,
};
