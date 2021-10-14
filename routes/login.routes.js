const router = require('express').Router();
const loginService = require('../services/login.services');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { code, response } = await loginService.login({ email, password });
  res.status(code).json({ ...response });
});

module.exports = router;
