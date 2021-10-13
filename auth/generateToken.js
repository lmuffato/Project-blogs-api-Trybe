const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = ({ password, ...payload }) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};
