const jwt = require('jsonwebtoken');

const { User } = require('../models');
require('dotenv').config();

const JWTconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

async function addUser({ displayName, email, password, image }) {
  const userByEmail = await User.findOne(
    { where: { email } },
  );

  if (userByEmail) {
    return {
      code: 409,
      message: 'User already registered',
    };
  }

  await User.create({ displayName, email, password, image });
  const JWTpayload = { displayName, email };

  const token = jwt.sign(
    JWTpayload,
    process.env.JWT_SECRET,
    JWTconfig,
  );
  return { code: 201, token };
}

module.exports = {
  addUser,
};