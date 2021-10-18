const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const SECRET = 'testedoprojeto';
const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const findEmail = async (email) => {
  const checkEmail = await Users.findOne({ where: { email } });
  return checkEmail;
};

const create = async (body) => {
  const email = await findEmail(body.email);

  if (email) return { status: 409, message: 'User already registered' };

  const user = await Users.create(body);

  const token = jwt.sign({ data: user.dataValues }, SECRET, jwtConfig);

  return { status: 201, data: { token } };
};

module.exports = {
  create,
};
