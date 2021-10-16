const jwt = require('jsonwebtoken');

const { User } = require('../models');
require('dotenv').config();

const JWTconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

async function login({ email, _password }) {
  const userByEmail = await User.findOne(
    { where: { email } },
  );
  
  if (!userByEmail) {
    return { code: 400, message: 'Invalid fields' };
  }

  const JWTpayload = { email };

  const token = jwt.sign(JWTpayload, process.env.JWT_SECRET, JWTconfig);

  return { code: 200, token };
}

module.exports = {
  login,
};