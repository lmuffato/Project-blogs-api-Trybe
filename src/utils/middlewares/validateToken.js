const jwt = require('jsonwebtoken');

const JWT_SECRET = 'xAbLaU';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    jwt.verify(token, JWT_SECRET);

    next();
  } catch (_err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};