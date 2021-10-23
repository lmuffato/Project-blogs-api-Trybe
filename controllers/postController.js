const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const postService = require('../services/postService');
const { BlogPosts } = require('../models');

const postRouter = express.Router();

postRouter.post('/', validateJWT, async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.user;
    const response = await postService.createPost(title, categoryIds, content, id);

    return res.status(response.status).json(response.message);
  } catch (e) {
    if (!e.status) return res.status(500).json({ message: 'Erro interno', error: e });
    return res.status(e.status).json({ message: e.message });
  }
});

postRouter.get('/', validateJWT, async (_req, res) => {
  try {
    const allPosts = await BlogPosts.findAll({ include: [{ all: true }] });
    return res.status(200).json(allPosts);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
});

module.exports = postRouter;