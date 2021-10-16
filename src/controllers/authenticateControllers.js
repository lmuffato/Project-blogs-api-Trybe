const express = require('express');
const { Authenticate } = require('../services');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { status, message, result } = await Authenticate.login(email, password);
  
    if (message) return res.status(status).json({ message });
  
    return res.status(status).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;