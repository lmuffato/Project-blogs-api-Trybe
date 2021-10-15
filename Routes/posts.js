const express = require('express');
const postController = require('../Controllers/postController');

const { validatePost, validateUpdate } = require('../Middlewares/post');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', auth, validatePost, postController.addNew);
router.get('/', auth, postController.listAll);
router.get('/search', auth, postController.listAll);
router.get('/:id', auth, postController.listById);
router.put('/:id', auth, validateUpdate, postController.update);
router.delete('/:id', auth, postController.exclude);

module.exports = router;
