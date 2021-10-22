const express = require('express');
const rescue = require('express-rescue');
const { postControllers } = require('../controllers');
const { middlewaresPost } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresPost.validateToken, rescue(postControllers.createPost));

module.exports = router;
