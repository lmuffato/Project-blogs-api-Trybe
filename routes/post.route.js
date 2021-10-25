const { Router } = require('express');
const { isAuth } = require('../middlewares/auth');
const { listPosts, createPost } = require('../controllers/post.controller');
const { postRequired, categoryIdsExists } = require('../validations/post.validation');

const router = Router();

router.get('/post', isAuth, listPosts);
router.post('/post', postRequired, categoryIdsExists, isAuth, createPost);

module.exports = router;