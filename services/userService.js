const jwt = require('jsonwebtoken');
const validationSchema = require('../helpers/validation_schema');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const createUser = async (data) => {
  const { error } = validationSchema.userSchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { email } = data;
  const userExist = await User.findOne({ where: { email } });
  if (userExist) return { statusCode: 409, message: 'User already registered' };
  await User.create(data);
  return { statusCode: 201, message: 'Cadastrado com sucesso' };
};

const userLogin = async (data) => {
  const { error } = validationSchema.loginSchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { email } = data;
  const login = await User.findOne({ where: { email } });
  if (!login) return { statusCode: 400, message: 'Invalid fields' };
  const token = jwt.sign({ data: login }, JWT_SECRET);
  return { statusCode: 200, token };
};

module.exports = {
  createUser,
  userLogin,
};
