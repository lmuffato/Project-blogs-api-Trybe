const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { StatusCodes: { OK } } = require('http-status-codes');
const { loginServices } = require('../../services');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = [
  (req, res, next) => {
    const { email, password } = req.body;
    
    const { error } = loginServices.validateData(email, password);
    
    if (error) {
      return next(error);
    }
    
    next();
  },

  rescue(async (req, res, next) => {
    const { email, password } = req.body;
    
      const alreadyExist = await loginServices.validateUser(email, password);
      
    if (!alreadyExist) next();

    if (alreadyExist) {
      return next(alreadyExist.error);
    }
  }),

  rescue(async (req, res) => {
    const { email } = req.body;
    const payload = { email };
    const token = jwt.sign(payload, secret, jwtConfig);
    res.status(OK).json({ token });
  }),
];
