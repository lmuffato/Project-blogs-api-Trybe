const tokenService = require('../services/token');
const { tokenNotFound, invalidToken } = require('../utils/errors');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(tokenNotFound.code)
      .json({ message: tokenNotFound.message });
  }

  const validToken = tokenService.verify(authorization);

  if (!validToken.data) {
    return res
      .status(invalidToken.code)
      .json({ message: invalidToken.message });
  }

  req.user = validToken.data;

  next();
};

module.exports = auth;
