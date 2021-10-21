const express = require('express');

const loginRouter = express.Router();
const loginService = require('../services/loginService');

loginRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.loginUser(email, password);
    return res.status(result.status).json({ token: result.message });
  } catch (e) {
    if (!e.status) return res.status(500).json({ message: 'Erro interno', error: e });
    return res.status(e.status).json({ message: e.message });
  }
});

module.exports = loginRouter;