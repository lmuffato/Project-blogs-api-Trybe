const { status, message } = require('../messages');
const { verify } = require('../auth/jwtFunctions');

const existToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(status.unauthorized).json({ message: message.tokenEmpty });
  }

  next();
};

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const getIdUser = verify(token);
    req.user = getIdUser;
  } catch (e) {
    if (e) {
    return res
      .status(status.unauthorized)
      .json({ message: message.tokenInvalid });
    }
  }

  next();
};

const validateToken = [
  existToken,
  checkToken,
];

module.exports = {
  validateToken,
};
