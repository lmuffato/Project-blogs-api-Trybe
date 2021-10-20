const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'umasenhasupersecreta';

const authToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const data = jwt.verify(token, JWT_SECRET);
    // console.log(data);
    req.user = data;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  authToken,
};