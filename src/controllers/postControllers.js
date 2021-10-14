const express = require('express');
const checkAuthentication = require('../middlewares/checkAuthentication');
const { Post } = require('../services');

const router = express.Router();

router.post('/', checkAuthentication, async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.auth;

    const { status, message, result } = await Post.create(title, content, categoryIds, id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
