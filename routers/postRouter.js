const express = require('express');
const { authToken } = require('../middlewares/authMiddleware');

const router = express.Router();

const { postController } = require('../controllers');

router.post('/', [authToken, postController.createPost]);
router.get('/', [authToken, postController.getAllPosts]);

module.exports = router;
