const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    
    req.user = decoded.user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { validateJWT };