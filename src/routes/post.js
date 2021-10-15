const router = require('express').Router();
const postController = require('../controllers/post');

// CREATE
router.post('/', postController.createPost);

module.exports = router;
