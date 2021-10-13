const express = require('express');
const { Users } = require('../services');

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

module.exports = router;
