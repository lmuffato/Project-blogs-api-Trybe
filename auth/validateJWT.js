// const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { StatusCodes: { UNAUTHORIZED } } = require('http-status-codes');
const { user } = require('../models');

require('dotenv').config();

const SECRET = process.env.SECRET || 'minhasenhasegura';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(UNAUTHORIZED).json({ message: 'missing auth token' });
  }
  try {
    const payload = jwt.verify(token, SECRET);

    const userEmail = await user.findOne(payload.data.email);
    if (!userEmail) {
      return res.status(UNAUTHORIZED)
        .json({ message: 'jwt malformed' });
    }
    req.user = user;
    req.payload = payload;
    // verificação do payload feita com ajuda da Marília
    next();
  } catch (error) {
    return res.status(UNAUTHORIZED).json({ message: error.message });
  }
};