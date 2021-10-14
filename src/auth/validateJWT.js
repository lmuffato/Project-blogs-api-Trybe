const jwt = require('jsonwebtoken');
  
const { getUserByEmail } = require('../services/userService');
const { notFound, expiredOrInvalid } = require('../utils/errorMessages');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) return res.status(notFound.code).json({ message: notFound.message });

    const payload = jwt.verify(token, secret);

    const user = await getUserByEmail(payload.email);
    if (!user) return res.status(expiredOrInvalid.code).json({ message: expiredOrInvalid.message });
    
    req.user = user;
    next();
  } catch (error) {
    return res.status(expiredOrInvalid.code).json({ message: expiredOrInvalid.message });
  }
};

module.exports = { validateJWT };