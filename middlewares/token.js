const jwt = require('jsonwebtoken');

const PASSWORD = process.env.PASSWORD || '123';

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const token = (userData) => {
  const tokenUser = jwt.sign(userData, PASSWORD, jwtConfig);
  return tokenUser;  
};

const validateToken = async (req, res, next) => {
  try {  
  const tokenUser = req.headers.authorization;
  if (!tokenUser) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validation = jwt.verify(tokenUser, PASSWORD);
    res.user = validation;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  token,
  validateToken,
};