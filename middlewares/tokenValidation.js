const jwt = require('jsonwebtoken');

const { SEGREDO } = process.env;

const UNAUTHORIZED_STATUS = 401;

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, SEGREDO);
    req.user = payload;

    next();
  } catch (_e) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
