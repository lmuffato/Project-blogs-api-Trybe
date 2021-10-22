// validateJWT.js
const jwt = require('jsonwebtoken');
const service = require('../services/User');

const secret = 'secretToken';

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
 
  if (!token || token === ' ') {
    return res.status(401).json({ message: 'Token not found' });
  }

   try {
    const decoded = jwt.verify(token, secret);
    const { data: { email } } = decoded;
    const users = await service.searchUser({ email });
    if (users === '!exist') {
      return res
        .status(401)
        .json({ message: 'Expired or invalid token.' });
    }
      next(); 
    } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}; 

module.exports = { validateJWT };