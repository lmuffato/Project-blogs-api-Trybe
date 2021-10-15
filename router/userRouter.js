const { Router } = require('express');
const { createUser, getAllUsers } = require('../controllers/usersController');
const { nameValidate,
emailValidate,
passwordValidate } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/authJWT');

const router = Router();

router.post('/', nameValidate, 
emailValidate, 
passwordValidate,
createUser);

router.get('/', validateJWT, getAllUsers);

module.exports = router; 
