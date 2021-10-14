const express = require('express');
const postController = require('../Controllers/postController');

const { validatePost } = require('../Middlewares/post');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', auth, validatePost, postController.addNew);

module.exports = router;
