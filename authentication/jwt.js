const jwt = require('jsonwebtoken');

const secret = 'token';

async function createToken(user) {
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return { token };
}

module.exports = {
  createToken,
};
