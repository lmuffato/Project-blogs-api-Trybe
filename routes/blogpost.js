const router = require('express').Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/blogpost');

router.post('/', auth, controller.createPost);
router.get('/search', auth, controller.getAllPosts);
router.get('/:id', auth, controller.getPostById);
router.put('/:id', auth, controller.editPost);
router.delete('/:id', auth, controller.deletePostById);
router.get('/', auth, controller.getAllPosts);
module.exports = router;