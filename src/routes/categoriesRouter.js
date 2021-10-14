const { Router } = require('express');
const { createNewCategory } = require('../controllers');
const { categoryCheck, Auth } = require('../middlewares');

const router = Router();
router.post('/', categoryCheck, Auth, createNewCategory);

module.exports = router;