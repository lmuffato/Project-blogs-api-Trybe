const jwt = require('jsonwebtoken');
const { error10, error11 } = require('../utils/errors');

require('dotenv').config();

const secret = process.env.SECRET || 'minhasenhasupersecreta';

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
}; 

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
 return res.status(error10.error.status)
  .json({ message: error10.error.message }); 
}
  try {
    const payload = verify(authorization);
    req.payload = payload;
    return next();
  } catch (error) {
    res.status(error11.error.status).json({ message: error11.error.message });
  }
};

module.exports = { tokenAuth, verify };