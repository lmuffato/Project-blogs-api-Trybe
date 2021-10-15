const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });
    
    const user = jwt.verify(token, JWT_SECRET);

    req.user = user;

    next();
  } catch (_e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};