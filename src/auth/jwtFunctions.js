require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.SECRET || 'senha_dificil';

const create = async (email) => {
  const searchEmail = await User.findOne({ where: { email } }); 
  const payload = { email, id: searchEmail.id };
  const jwtConfig = { algorithm: 'HS256', expiresIn: '12h' };
  const token = jwt.sign(payload, secret, jwtConfig);
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
