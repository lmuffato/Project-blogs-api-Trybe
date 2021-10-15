const { Router } = require('express');
const { createUser, getAllUsers, getUserById } = require('../controllers/usersController');
const { nameValidate,
emailValidate,
passwordValidate,
userIdExist } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/authJWT');

const router = Router();

router.post('/', nameValidate, 
emailValidate, 
passwordValidate,
createUser);

router.get('/', validateJWT, getAllUsers);

router.get('/:id', validateJWT, userIdExist, getUserById);

module.exports = router; 
