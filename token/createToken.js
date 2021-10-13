const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'minhasenhasegura';

module.exports = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
    const token = jwt.sign({ data: user }, SECRET, jwtConfig);
    return token;
};
