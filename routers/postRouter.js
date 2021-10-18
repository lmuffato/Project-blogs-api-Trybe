const express = require('express');
const { authToken } = require('../middlewares/authMiddleware');

const router = express.Router();

const { postController } = require('../controllers');

router.post('/', [authToken, postController.createPost]);
router.get('/', [authToken, postController.getAllPosts]);
router.get('/:id', [authToken, postController.getById]);
router.put('/:id', [authToken], postController.updatePost);
router.delete('/:id', [authToken], postController.removePost);

module.exports = router;
