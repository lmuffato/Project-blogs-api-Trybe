const { User } = require('../middleware/joi');
const Model = require('../../models');

const validateUser = (data) => {
  const response = User.validate(data);
  console.log(response);
  if (response.error) return { status: 400, error: response.error.details[0].menssage };
};

const createUser = async (data) => {
  const validate = validateUser(data);
  if (validate) return validate;
  const findEmail = await Model.User.findOne(data.email);
  if (findEmail) return { status: 409, error: 'User already registered' };
  await Model.User.create(data);
  return { status: 201, menssage: 'User created' };
};

module.exports = {
  createUser,
};
