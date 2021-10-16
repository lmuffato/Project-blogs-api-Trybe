const { Router } = require('express');
const { postCategory } = require('../controllers/categoryController');
const { validateCategoryName } = require('../middlewares/validateCategory');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/categories', validateJWT, validateCategoryName, postCategory);

module.exports = router;