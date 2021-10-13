const jwt = require('jsonwebtoken');
require('dotenv').config();

const { builtError } = require('../Services/heplers');
const { User } = require('../models');

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  const secret = process.env.JWT_SECRET;
  if (!token) {
    return next(builtError(401, 'missing auth token'));
  }
  try {
    const { data: { email } } = jwt.verify(token, secret);
    const user = await User.findOne({ where: { title: email } });
    if (!user) return builtError(401, 'jwt malformed');
    req.user = user;
    next();
  } catch ({ message }) {
    return next(builtError(401, message));
  }
};
