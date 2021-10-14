const router = require('express').Router();
const auth = require('../middlewares/auth');
const controller = require('../controllers/categories');

router.post('/', auth, controller.createCategory);

module.exports = router;
