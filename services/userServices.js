const jwt = require('jsonwebtoken');

const { User } = require('../models');

const Schema = require('../utils/schema');

const SECRET = 'testedoprojeto';
const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const findEmail = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  return checkEmail;
};

const create = async (body) => {
  const { error } = Schema.User.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const email = await findEmail(body.email);
  console.log(email);
  if (email) return { status: 409, message: 'User already registered' };

  const user = await User.create(body);

  const token = jwt.sign({ data: user.dataValues }, SECRET, jwtConfig);

  return { status: 201, data: { token } };
};

const login = async (body) => {
  const { error } = Schema.Login.validate(body);
  if (error) return { status: 400, message: error.details[0].message };

  const { email, password } = body;

  const checkEmail = await findEmail(email);
  if (!checkEmail 
  || checkEmail.dataValues.password !== password) return { status: 400, message: 'Invalid fields' };

  const token = jwt.sign({ data: checkEmail.dataValues }, SECRET, jwtConfig);

  return { status: 200, data: { token } };
};

const getAll = async () => {
  const users = await User.findAll();

  if (!users) return { status: 400, message: 'Users empty' };

  return { status: 200, data: { users } };
};

module.exports = {
  create,
  login,
  getAll,
};
