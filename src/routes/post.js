const router = require('express').Router();
const postController = require('../controllers/post');

// CREATE
router.post('/', postController.createPost);

// READ
router.get('/', postController.getPosts);

module.exports = router;
