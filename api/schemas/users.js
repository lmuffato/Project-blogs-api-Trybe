const Joi = require('joi');

const MIN_NAME_LENGTH = 8;
const PASSWORD_LENGTH = 6;

const userSchema = Joi.object({
  displayName: Joi
  .string()
  .not()
  .empty()
  .min(MIN_NAME_LENGTH)
  .required(),
  email: Joi
  .string()
  .email()
  .not()
  .empty()
  .required(),
  password: Joi.string()
    .not()
    .empty()
    .min(PASSWORD_LENGTH)
    .max(PASSWORD_LENGTH)
    .required(),
});

module.exports = userSchema;
