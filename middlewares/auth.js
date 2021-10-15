const jwt = require('jsonwebtoken');
const { secret } = require('../utils/jwtConfig');
const { User } = require('../models');

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data } = jwt.verify(token, secret);
    const { dataValues } = await User.findOne(
      { where: { email: data }, attributes: { exclude: ['password'] } },
    );
    req.user = dataValues;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;