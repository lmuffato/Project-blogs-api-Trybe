const jwt = require('jsonwebtoken');

const JWT_SECRET = 'xAbLaU';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const userPayload = jwt.verify(token, JWT_SECRET);
    req.user = userPayload.dataValues;

    next();
  } catch (_err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};