const jwt = require('jsonwebtoken');

const SECRET = 'blogsApi';

module.exports = (req, res, next) => {
  try {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const payload = jwt.verify(authorization, SECRET);

  const { dataValues: { id } } = payload;

  req.user = id;

  next();
  } catch (_e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  } 
};
