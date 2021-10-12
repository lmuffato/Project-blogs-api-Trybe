const express = require('express');

const { create } = require('../controllers/user');

const router = express.Router();

router.post('/', create);

router.get('/');

router.get('/:id');

router.delete('/me');

module.exports = router;