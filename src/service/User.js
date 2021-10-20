const Joi = require('../middleware/joi');
const Model = require('../../models');

const validateUser = (data) => {
  const { error } = Joi.User.validate(data);
  
  if (error) return { status: 400, error: error.details[0].message };
  return false;
};

const createUser = async (data) => {
  const validate = validateUser(data);
  const { email } = data; 
  if (validate) return validate;
  
  const findEmail = await Model.User.findOne({ where: { email } });
  
  if (findEmail) return { status: 409, error: 'User already registered' };
  await Model.User.create(data);
  return { status: 201, message: 'User created' };
};

module.exports = {
  createUser,
};