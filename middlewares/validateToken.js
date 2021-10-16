const { tokenNotFound } = require('../utils/errorMap');

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) next(tokenNotFound.error);

  next();
};

module.exports = { validateToken };