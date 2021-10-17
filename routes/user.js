const express = require('express');
const { user: { create } } = require('../controllers');

const router = express.Router();

router.post('/user', create);

module.exports = router;