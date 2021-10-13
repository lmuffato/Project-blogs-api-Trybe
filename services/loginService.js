const { StatusCodes: { OK } } = require('http-status-codes');
const createToken = require('../token/createToken');

const login = async ({ email, password }) => {
  const token = createToken({ email, password });

  return { statusCode: OK, token };
};

module.exports = {
  login,
};