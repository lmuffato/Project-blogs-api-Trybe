const jwt = require('jsonwebtoken');

const getToken = (email, password) => {
    const dataToken = { email, password };
    const secret = 'secretToken';
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const tokenGenerated = jwt.sign({ data: dataToken }, secret, jwtConfig);
    const token = { token: tokenGenerated };
    return token;
  };
  module.exports = { getToken };