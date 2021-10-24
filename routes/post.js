const router = require('express').Router();
const { PostController } = require('../controllers');
const AuthMiddleware = require('../middlewares/auth');

router.get('/search', AuthMiddleware, PostController.search);
router.post('/', AuthMiddleware, PostController.create);
router.get('/', AuthMiddleware, PostController.getAll);
router.get('/:id', AuthMiddleware, PostController.getById);
router.delete('/:id', AuthMiddleware, PostController.destroy);

module.exports = router;