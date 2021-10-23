const Joi = require('joi');

const categoryValidation = (name) => {
  const { error } = Joi.object({
    name: Joi.string().required().messages(
      { 'name.required': '"name" is required' },
),
  }).validate({ name });

  if (error) throw error;
};

module.exports = {
  categoryValidation,
};