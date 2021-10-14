const jwt = require('jsonwebtoken');
const JWTCustomError = require('./jwtCustomError');

const SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    next();
  } catch (error) {
    error.message = JWTCustomError(error.message);
    return res.status(401).json({ message: error.message });
  }
};
