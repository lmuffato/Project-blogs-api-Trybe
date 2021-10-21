const jwt = require('jsonwebtoken');
/* const { newToken } = require('../middleware/token'); */
const Joi = require('../middleware/joi');
const { User } = require('../../models');

const SECRET_PASS = process.env.JWT_SECRET;
require('dotenv').config();

const STATUS_OK = 200;

const logInUser = async (data) => {
  const { error } = Joi.Login.validate(data);
  if (error) return { status: 400, error: error.details[0].message };

  const findUser = await User.findOne({ where: { email: data.email } });
  if (!findUser) return { status: 400, error: 'Invalid fields' };

  const token = jwt.sign({ data: findUser }, SECRET_PASS);
  
  return { status: STATUS_OK, data: { token } };
};

module.exports = {
  logInUser,
};