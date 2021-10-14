const jwt = require('jsonwebtoken');

const JWT_SECRET = 'E$z8TCmXo&Hz6C?Q';
// const { JWT_SECRET } = process.env;
const authToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { data } = jwt.verify(token, JWT_SECRET);
    req.user = data;
    return next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};
