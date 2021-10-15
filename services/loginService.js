const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const loginValidations = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const userLogin = async (data) => {
  const { error } = loginValidations.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  const { email } = data;
  const login = await User.findOne({ where: { email } });
  if (!login) return { status: 400, message: 'Invalid fields' };
  const token = jwt.sign({ data: login }, JWT_SECRET);
  return { status: 200, token };
};

module.exports = { userLogin };