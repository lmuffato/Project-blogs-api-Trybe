const express = require('express');
const rescue = require('express-rescue');
const { postControllers } = require('../controllers');
const { middlewaresPost } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresPost.validatePost, rescue(postControllers.createPost));
router.get('/', middlewaresPost.validateToken, rescue(postControllers.getPosts));
router.get('/:id', middlewaresPost.validateListPost, rescue(postControllers.getPost));
router.put('/:id', middlewaresPost.validateUpdate, rescue(postControllers.updatePost));

module.exports = router;
