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
  const JWTpayload = { email };

  const token = jwt.sign(
    JWTpayload,
    process.env.JWT_SECRET,
    JWTconfig,
  );

  return { code: 201, token };
}

async function getAll() {
  const users = await User.findAll();
  
  return { code: 200, users };
}

async function getById(userId) {
  const user = await User.findByPk(userId);

  if (!user) {
    return { code: 404, message: 'User does not exist' };
  }
  
  const { id, displayName, email, image } = user;
  return { code: 200, user: { id, displayName, email, image } };
}

module.exports = {
  addUser,
  getAll,
  getById,
};