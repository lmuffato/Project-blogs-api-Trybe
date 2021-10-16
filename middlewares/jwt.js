const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
  const decoded = jwt.verify(token, JWT_SECRET);
  const { data } = decoded;
  req.user = data;
    next();  
  } catch (e) {
    return res.status(401).json({ message: 'jwt malformed' }); 
  }
};

module.exports = {
  validateToken,
};