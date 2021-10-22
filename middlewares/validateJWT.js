const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const segredo = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);
    const { email } = decoded.data;
    const user = await Users.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuario do token.' });
    }

    req.user = user;
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateJWT };
