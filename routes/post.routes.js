const router = require('express').Router();
const postService = require('../services/post.services');

router.post('/post', async (req, res) => {
  const { authorization: token } = req.headers;
  const { title, content, categoryIds } = req.body;
  const { code, response } = await postService.create({ title, content, categoryIds, token });
  res.status(code).json({ ...response });
});

module.exports = router;
