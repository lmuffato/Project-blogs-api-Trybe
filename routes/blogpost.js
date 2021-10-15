const router = require('express').Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/blogpost');

router.post('/', auth, controller.createPost);
router.get('/:id', auth, controller.getPostById);
router.put('/:id', auth, controller.editPost);
router.get('/', auth, controller.getAllPosts);
module.exports = router;