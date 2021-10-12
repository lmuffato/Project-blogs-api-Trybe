const { Router } = require('express');
const categoryController = require('../controllers/categoriesController');
const { tokenAuth } = require('../auth/tokenAuth');

const router = Router();

router.post('/', tokenAuth,
categoryController.create);

module.exports = router;