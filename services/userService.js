const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET = 'teste' } = process.env;

const createUser = async ({ body: { displayName, email, password, image } }) => {
  User.create({ displayName, email, password, image });
  const token = jwt.sign({ displayName, email }, JWT_SECRET);
  return ({ token });
};

module.exports = {
  createUser,
};
