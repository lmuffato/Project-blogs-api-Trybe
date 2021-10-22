const express = require('express');
const rescue = require('express-rescue');
const { postControllers } = require('../controllers');
const { middlewaresPost } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresPost.validatePost, rescue(postControllers.createPost));
router.get('/', rescue(postControllers.getPosts));

module.exports = router;
