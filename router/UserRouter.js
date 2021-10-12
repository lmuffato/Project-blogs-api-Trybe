const { Router } = require('express');
const usersController = require('../controllers/usersController');
const { nameValidator,
emailValidator,
passwordValidator } = require('../utils/middlewares');
const { tokenAuth } = require('../auth/tokenAuth');

const router = Router();

router.post('/', nameValidator, 
emailValidator, 
passwordValidator,
usersController.create);

router.get('/',
tokenAuth,
usersController.getUsers);

router.get('/:id',
tokenAuth,
usersController.getUser);

module.exports = router;