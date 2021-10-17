const jwt = require('jsonwebtoken');
const { tokenNotFound, invalidToken } = require('../utils/errorMap');
const SECRET = require('../utils/secret');

const validateToken = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
  
    if (!token) next(tokenNotFound.error);

    const decodedToken = jwt.verify(token, SECRET);
    
    req.token = decodedToken;

    next();
  } catch (error) {
    next(invalidToken.error);
  }
};

module.exports = { validateToken };