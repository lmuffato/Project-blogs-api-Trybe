const Joi = require('joi');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { User } = require('../models');

const dataSchema = Joi.object({
  email: Joi.string().not().empty().required(),
  password: Joi.string().not().empty().required(),
});

const validateUser = async (email, password) => {
  const user = await User.findOne({
    where: { 
      email,
      password,
    },
  });

  if (!user) {
    return {
      error: {
        statusCode: BAD_REQUEST,
        message: 'Invalid fields' },
      };
  }
};

const validateData = (email, password) => {
  const userData = { email, password };

  return dataSchema.validate(userData);
};

module.exports = {
  validateUser,
  validateData,
};
