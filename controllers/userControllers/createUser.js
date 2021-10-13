const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const { StatusCodes: { CREATED, CONFLICT, INTERNAL_SERVER_ERROR } } = require('http-status-codes');
const { userServices } = require('../../services');
const { User } = require('../../models');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

module.exports = [
  (req, res, next) => {
    const { displayName, email, password } = req.body;
    
    const { error } = userServices.validateUser(displayName, email, password);
    
    if (error) {
      return next(error);
    }
    
    next();
  },

  rescue(async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findAll({
      where: { email },
    });

    if (user.length > 0) {
      next({ 
        message: 'User already registered',
        code: CONFLICT,
      });
    }

    next();
  }),
  
  rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
    User.create({ displayName, email, password, image })
    .then((newUser) => {
      const payload = { newUser };
      const token = jwt.sign(payload, secret, jwtConfig);
      res.status(CREATED).json({ token });
      })
      .catch((e) => {
        console.log(e.message);
        res.status(INTERNAL_SERVER_ERROR).send({ message: 'Algo deu errado' });
      });
  }),
];
