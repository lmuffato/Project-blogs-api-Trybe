const router = require('express').Router();
const postController = require('../controllers/post');

// CREATE
router.post('/', postController.createPost);

// READ
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);

// UPDATE
router.put('/:id', postController.updatePost);

module.exports = router;
