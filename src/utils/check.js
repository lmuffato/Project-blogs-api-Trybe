const Joi = require('joi');

const user = Joi.object({
  displayName: Joi.required().string().min(8),
  email: Joi.required().string().email(),
  password: Joi.required().string().length(6),
  image: Joi.string(),
});

module.exports = {
  user,
};
