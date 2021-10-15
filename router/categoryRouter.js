const { Router } = require('express');
const { createCategory } = require('../controllers/categoriesController');
const { validateCategory } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/', validateJWT,
validateCategory,
createCategory);

// router.get('/', validateJWT, getAllUsers);

// router.get('/:id', validateJWT, userIdExist, getUserById);

module.exports = router; 
