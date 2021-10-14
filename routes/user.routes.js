const router = require('express').Router();
const userService = require('../services/user.services');

router.post('/user', async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { code, response } = await userService.create({ displayName, email, password, image });
  res.status(code).json({ ...response });
});

module.exports = router;
