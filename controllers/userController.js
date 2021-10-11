const express = require('express');

const validateName = require('../middlewares/validateName.js');

const { User } = require('../models');

const router = express.Router();

router.post('/', validateName, async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    console.log(email);
    await User.create({ displayName, email, password, image });
    // const token;
    return res.status(201).json({ message: 'token' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});
module.exports = router;