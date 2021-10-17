const jwt = require('jsonwebtoken');
const {
  HTTP_401,
  invToken,
  tokenNotFound,
} = require('../helpers');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(HTTP_401).json(tokenNotFound);
  }

  try {
  const decoded = jwt.verify(token, JWT_SECRET);
  const { data } = decoded;
  req.user = data;
    next();  
  } catch (e) {
    return res.status(HTTP_401).json(invToken); 
  }
};

module.exports = {
  validateToken,
};