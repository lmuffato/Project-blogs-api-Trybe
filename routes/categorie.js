const router = require('express').Router();
const { CategoryController } = require('../controllers');
const AuthMiddleware = require('../middlewares/auth');

router.post('/', AuthMiddleware, CategoryController.create);
router.get('/', AuthMiddleware, CategoryController.getAll);

module.exports = router;