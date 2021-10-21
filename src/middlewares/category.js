const { status, message } = require('../messages');
const { verify } = require('../auth/jwtFunctions');

const checkName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(status.badRequest).json({ message: message.nameEmpty });
  }

  next();
};

const existToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(status.unauthorized).json({ message: message.tokenEmpty });
  }

  next();
};

const checkToken = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verify(token);
  } catch (e) {
    if (e) {
    return res
      .status(status.unauthorized)
      .json({ message: message.tokenInvalid });
    }
  }

  next();
};

const validateCategory = [
  checkName,
  existToken,
  checkToken,
];

const validateToken = [
  existToken,
  checkToken,
];

module.exports = {
  validateCategory,
  validateToken,
};
