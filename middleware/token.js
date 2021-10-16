const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const validaToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, SECRET);

    req.user = payload;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validaToken;
