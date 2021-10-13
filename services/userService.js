const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET = 'teste' } = process.env;

const createUser = async ({ body: { displayName, email, password, image } }) => {
  User.create({ displayName, email, password, image });
  const token = jwt.sign({ email }, JWT_SECRET);
  return ({ token });
};

const findAllUsers = async () => User.findAll();

module.exports = {
  createUser,
  findAllUsers,
};
