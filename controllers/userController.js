require('dotenv').config();
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const repeatsEmail = require('../middlewares/repeatsEmail.js');
const validateEmail = require('../middlewares/validateEmail.js');
const validateJWT = require('../middlewares/validateJWT.js');
const validateName = require('../middlewares/validateName.js');
const validatePassword = require('../middlewares/validatePassword.js');

const secret = process.env.JWT_SECRET;
const { User } = require('../models');

const UserRouter = Router();
const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

UserRouter.post('/',
  validateName,
  validateEmail,
  validatePassword,
  repeatsEmail, async (req, res) => {
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

UserRouter.get('/', validateJWT, async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});

UserRouter.get('/:id', validateJWT, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    console.log(user);
    return res.status(200).json(user.dataValues);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: 'User does not exist' });
  }
});
module.exports = UserRouter;