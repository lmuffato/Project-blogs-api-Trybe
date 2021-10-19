const Joi = require('joi');

const userValidation = (displayName, email, password, image) => {
  const { error } = Joi.object({
    displayName: Joi.string().required().min(8).messages(
      { 'displayName.min': '"displayName" length must be at least 8 characters long' },
),
    email: Joi.string().email().required().messages({ 'email.required': '"email" is required' }),
    password: Joi.string().required().length(6).messages({
      'password.length': '"password" length must be 6 characters long',
      'password.required': '"password" is required',
    }),
    image: Joi.string().required(),
  }).validate({ displayName, email, password, image });

  if (error) throw error;
};

const emailFormatValidator = (email) => {
  const regexMatch = /\S+@\S+\.\S+/;
  if (!regexMatch.test(email)) {
    const error = new Error('"email" must be a valid email');
    error.code = 400;
    throw error;
  } 
};

module.exports = {
  userValidation,
  emailFormatValidator,
};