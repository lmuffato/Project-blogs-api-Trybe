const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.SECRET || 'senha';

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
}; 

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
 return res.status(401)
  .json({ message: 'Token not found' }); 
}
  try {
    const payload = verify(authorization);
    req.payload = payload;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenAuth, verify }; 