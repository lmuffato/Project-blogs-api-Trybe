const { errors } = require('../utils/messages');
const { verifyToken } = require('../utils/token');

const authToken = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return next(errors.tokenNotFound);

    const decode = verifyToken(token);

    req.decode = decode;

    next();
  } catch (e) {
    console.error(e);
    next(errors.tokenInvalid);
  }
};

module.exports = authToken;
