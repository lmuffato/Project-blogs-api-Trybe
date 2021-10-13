const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createCategory, getCategories } = require('../controllers');

router.post('/', validateJWT, createCategory);
router.get('/', validateJWT, getCategories);

module.exports = router;
