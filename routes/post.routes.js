const router = require('express').Router();
const postService = require('../services/post.services');

router.post('/post', async (req, res) => {
  const { authorization: token } = req.headers;
  const { title, content, categoryIds } = req.body;
  const { code, response } = await postService.create({ title, content, categoryIds, token });
  res.status(code).json({ ...response });
});
router.get('/post', async (req, res) => {
  const { authorization: token } = req.headers;
  const { code, response } = await postService.readAll({ token });
  res.status(code).json({ ...response });
});
router.get('/post/:id', async (req, res) => {
  const { authorization: token } = req.headers;
  const { id } = req.params;
  const { code, response } = await postService.readOne({ token, id });
  res.status(code).json({ ...response });
});

module.exports = router;
