const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createCategory } = require('../controllers');

router.post('/', validateJWT, createCategory);

module.exports = router;
