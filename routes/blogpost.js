const router = require('express').Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/blogpost');

router.post('/', auth, controller.createPost);
router.get('/:id', auth, controller.getPostById);
router.get('/', auth, controller.getAllPosts);
module.exports = router;