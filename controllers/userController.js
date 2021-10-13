require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const repeatsEmail = require('../middlewares/repeatsEmail.js');
const validateEmail = require('../middlewares/validateEmail.js');
const validateName = require('../middlewares/validateName.js');
const validatePassword = require('../middlewares/validatePassword.js');

const secret = process.env.JWT_SECRET;
const { User } = require('../models');

const router = express.Router();
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

router.post('/', validateName, validateEmail, validatePassword, repeatsEmail, async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = { displayName, email, password, image };
    await User.create({ displayName, email, password, image });
    const token = jwt.sign({ user }, secret, jwtConfig);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});
module.exports = router;