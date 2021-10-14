const { Router } = require('express');
const { createNewCategory, getAllCategories } = require('../controllers');
const { categoryCheck, Auth } = require('../middlewares');

const router = Router();
router.post('/', categoryCheck, Auth, createNewCategory);
router.get('/', Auth, getAllCategories);

module.exports = router;