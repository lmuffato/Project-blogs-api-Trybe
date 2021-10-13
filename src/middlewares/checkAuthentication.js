const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    console.log(authorization);

    if (!authorization) next({ status: 401, message: 'Token not found' });
  
    const { data } = jwt.verify(authorization, process.env.JWT_SECRET);
    
    req.auth = { ...data };

    next();
  } catch (e) {
    console.log(e);
    next({ status: 401, message: 'Expired or invalid token' });
  }
};
