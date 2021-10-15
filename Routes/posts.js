const express = require('express');
const postController = require('../Controllers/postController');

const { validatePost } = require('../Middlewares/post');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', auth, validatePost, postController.addNew);
router.get('/:id', auth, postController.listById);
router.get('/', auth, postController.listAll);

module.exports = router;
