// const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');
const { User } = require('../models');

require('dotenv').config();

const SECRET = process.env.SECRET || 'minhasenhasegura';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, SECRET);
    const { email } = payload.data;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(UNAUTHORIZED)
        .json({ message: 'User does not exist' });
    }
    req.user = user;
    // verificação do payload feita com ajuda da Marília
    next();
  } catch (error) {
    return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};