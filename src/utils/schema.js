const Joi = require('joi');

// const MESSAGE_DISPLAY_NAME = '"displayName" length must be at least 8 characters long';
// const MESSAGE_EMAIL = '"email" must be a valid email';
// const MESSAGE_PASSWORD_REQUIRED = '"password" is required';
// const MESSAGE_EMAIL_REQUIRED = '"email" is required';
// const MESSAGE_PASSWORD = '"password" length must be 6 characters long';

const User = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
  image: Joi.string(),
});

module.exports = {
  User,
};