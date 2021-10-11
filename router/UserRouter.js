const { Router } = require('express');
const usersController = require('../controllers/usersController');
const { nameValidator,
emailValidator,
passwordValidator } = require('../utils/middlewares');

const router = Router();

router.post('/', nameValidator, 
emailValidator, 
passwordValidator,
usersController.create);

module.exports = router;