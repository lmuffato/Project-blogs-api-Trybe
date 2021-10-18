const jwt = require('jsonwebtoken');
const userModel = require('../Models/userModels');
const { status } = require('../utils');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(status.UNAUTHORIZED).json({ message: status.ERROR_TOKEN });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const { data } = decoded;
    const { email } = data;

    const userVerify = await userModel.checkEmailExists(email);
    if (!userVerify) {
      return res.status(status.UNAUTHORIZED).json({ message: status.EXPIRED_TOKEN });
    }
    const { id } = userVerify;
    req.user = id;
    return next();
  } catch (err) {
    return res.status(status.UNAUTHORIZED).json({ message: status.EXPIRED_TOKEN });
  }
};