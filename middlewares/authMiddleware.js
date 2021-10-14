const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET = 'Trybe';

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token === undefined) return res.status(401).json({ message: 'Token not found' });
  
    const payload = jwt.verify(token, SECRET);
  
    const user = await Users.findOne({ where: { email: payload.email } });

    const { password: _, ...userPayload } = user;

    req.user = userPayload;
  
    next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};