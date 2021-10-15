const express = require('express');
const blogPostController = require('../controllers/blogPost');

const validations = require('../middlewares/validations');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', [validateToken]);

module.exports = router;
