const jwt = require('jsonwebtoken');

const SECRET = 'aiiipapaiii';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, SECRET);
    const { iat: _, ...verifiedUser } = payload;
    req.user = verifiedUser;
    next();
  } catch (_error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
