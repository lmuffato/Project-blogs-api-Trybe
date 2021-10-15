require('dotenv').config();
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const validatePassword = require('../middlewares/validatePassword.js');
const validateEmail = require('../middlewares/validateEmail.js');

const secret = process.env.JWT_SECRET;
const { User } = require('../models');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const LoginRouter = Router();
LoginRouter.post('/', validatePassword, validateEmail, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (user === null) return res.status(400).json({ message: 'Invalid fields' });
    const token = jwt.sign({ user }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});

module.exports = LoginRouter;