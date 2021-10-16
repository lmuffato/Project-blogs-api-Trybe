const express = require('express');
const { Users } = require('../services');
const checkAuthentication = require('../middlewares/checkAuthentication');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const { status, message, result } = await Users.create(displayName, email, password, image);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    next(e);
  }
});

router.get('/', checkAuthentication, async (_req, res, next) => {
  try {
    const { result } = await Users.findAll();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get('/:id', checkAuthentication, async (req, res, next) => {
  try {
    const { id } = req.params;

    const { status, message, result } = await Users.findOne(id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.delete('/me', checkAuthentication, async (req, res, next) => {
  try {
    const { id } = req.auth;

    const { status, message, result } = await Users.deleteMe(id);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
