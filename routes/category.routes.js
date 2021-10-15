const router = require('express').Router();
const categoryService = require('../services/category.services');

router.post('/categories', async (req, res) => {
  const { authorization: token } = req.headers;
  const { name } = req.body;
  const { code, response } = await categoryService.create({ name, token });
  res.status(code).json({ ...response });
});
router.get('/categories', async (req, res) => {
  const { authorization: token } = req.headers;
  const { code, response } = await categoryService.readAll({ token });
  res.status(code).json({ ...response });
});
module.exports = router;
