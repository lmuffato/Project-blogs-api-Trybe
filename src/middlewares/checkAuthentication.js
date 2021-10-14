const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkDataFields = (data) => {
  const { id, displayName, email } = data;
  
  if (!id || !displayName || !email) return false;

  return true;
};

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) next({ status: 401, message: 'Token not found' });
  
    const { data } = jwt.verify(authorization, process.env.JWT_SECRET);

    if (!checkDataFields(data)) next({ status: 401, message: 'Expired or invalid token' });

    req.auth = { ...data };

    next();
  } catch (e) {
    console.log(e);
    next({ status: 401, message: 'Expired or invalid token' });
  }
};
