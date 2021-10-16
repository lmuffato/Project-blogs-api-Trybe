const { Router } = require('express');
const { postCategory, getCategories } = require('../controllers/categoryController');
const { validateCategoryName } = require('../middlewares/validateCategory');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/categories', validateJWT, validateCategoryName, postCategory);
router.get('/categories', validateJWT, getCategories);

module.exports = router;