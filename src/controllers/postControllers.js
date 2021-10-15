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

router.get('/', checkAuthentication, async (req, res, next) => {
  try {
    const { status, message, result } = await Post.findAll();

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get('/:id', checkAuthentication, async (req, res, next) => {
  try {
    const { id } = req.params;

    const { status, message, result } = await Post.findByPk(id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.put('/:id', checkAuthentication, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.auth;

    const updateData = { id, title, content, userId };

    const { status, message, result } = await Post.updateByPk(updateData, categoryIds);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.delete('/:id', checkAuthentication, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.auth;

    const { status, message, result } = await Post.deleteByPk(id, userId);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
