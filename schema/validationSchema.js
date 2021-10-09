const Joi = require('joi');

const postUserValidate = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().min(1).required(),
});

module.exports = {
  postUserValidate,
};
