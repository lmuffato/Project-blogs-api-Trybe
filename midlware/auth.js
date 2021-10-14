const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    
    req.user = decoded.user;

    next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWT };