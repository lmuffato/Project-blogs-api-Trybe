const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { Users } = require('../models');

const usersRouter = express.Router();
const usersService = require('../services/usersService');

usersRouter.post('/', async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;
    const result = await usersService.createUser(email, password, displayName, image);
    return res.status(result.status).json({ token: result.message });
  } catch (e) {
    if (!e.status) return res.status(500).json({ message: 'Erro interno', error: e });
    return res.status(e.status).json({ message: e.message });
  }
});

usersRouter.get('/', validateJWT, async (_req, res) => {
  try {
    const users = await Users.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
});

module.exports = usersRouter;