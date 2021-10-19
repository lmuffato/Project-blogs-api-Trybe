const jwt = require('jsonwebtoken');

const { SEGREDO } = process.env;

const UNAUTHORIZED_STATUS = 401;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token not found' });
  }

  try {
    const { data } = jwt.verify(token, SEGREDO);
    req.user = data;

    return next();
  } catch (_e) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
