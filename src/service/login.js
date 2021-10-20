const { newToken } = require('../middleware/token');
const Joi = require('../middleware/joi');
const model = require('../../models');

const STATUS_OK = 200;

const logInUser = async (data) => {
  const { error } = Joi.Login.validate(data);
  if (error) return { status: 400, error: error.details[0].message };

  const findUser = await model.User.findOne({ where: { email: data.email } });
  if (!findUser) return { status: 400, error: 'Invalid fields' };

  const token = newToken(findUser.dataValues);
  
  return { status: STATUS_OK, data: { token } };
};

module.exports = {
  logInUser,
};