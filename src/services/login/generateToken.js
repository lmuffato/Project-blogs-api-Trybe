const jwt = require('jsonwebtoken');
const validateCredential = require('./validateCredential');

const { JWT_SECRET } = process.env;

module.exports = async (userData) => {
  const userSearch = await validateCredential(userData);
  
  if (userSearch.message) return userSearch;

  const { password: _, ...userPayload } = userSearch;

  const token = jwt.sign(userPayload, JWT_SECRET, { 
    algorithm: 'HS256',
    expiresIn: '15d',
  });

  return { status: 200, token };
};