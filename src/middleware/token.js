const SECRET_PASS = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');
require('dotenv').config();

/* const newToken = (user) => {
  const { password: _, ...payload } = user;
  const config = { algorithm: 'HS256', expiresIn: '1d' };
  const token = jwt.sign(payload, SECRET_PASS, config);
  return token;
}; */

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  console.log(token);
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data } = jwt.verify(token, SECRET_PASS);
    req.user = data;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
/*   newToken, */
  validateToken,
};