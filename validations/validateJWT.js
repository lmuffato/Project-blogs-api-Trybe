// validateJWT.js
const jwt = require('jsonwebtoken');
const service = require('../services/UserService');

const secret = 'secretToken';

const validateJWT = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token || token === ' ') {
    return res.status(401).json({ message: 'Token not found' });
  }

   try {
    const decoded = jwt.verify(token, secret);
    const { data: { email } } = decoded;
    const user = await service.searchUser({ email });
    if (user === '!exist') {
      return res
        .status(401)
        .json({ message: 'Invalid token.' });
    }
    req.user = user;
      next(); 
    } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}; 

module.exports = { validateJWT };