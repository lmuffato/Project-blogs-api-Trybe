require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const tokenValidation = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    const token = authorization;
  
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const validToken = jwt.verify(token, SECRET);
    req.user = validToken.user;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};
