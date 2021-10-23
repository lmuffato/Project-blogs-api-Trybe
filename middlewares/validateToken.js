const helpers = require('../helpers/functionsHelpers');
require('dotenv').config();

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const user = await helpers.verifyTokenValid(token, secret);
    req.user = user;
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};