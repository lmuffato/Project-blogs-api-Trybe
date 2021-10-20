require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.SECRET || 'senha_dificil';

const create = async (email) => {
  const { dataValues: { password, ...user } } = await User.findOne({ where: { email } });
  const jwtConfig = { algorithm: 'HS256', expiresIn: '12h' };
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = {
  create,
  verify,
};
