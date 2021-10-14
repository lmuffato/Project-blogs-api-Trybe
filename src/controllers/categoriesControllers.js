const express = require('express');
const { Category } = require('../services');
const checkAuthentication = require('../middlewares/checkAuthentication');

const router = express.Router();

router.post('/', checkAuthentication, async (req, res, next) => {
  try {
    const { name } = req.body;

    const { status, message, result } = await Category.create(name);

    if (message) return res.status(status).json({ message });

    return res.status(status).json(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
