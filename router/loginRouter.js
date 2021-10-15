const { Router } = require('express');
const { loginUser } = require('../controllers/loginController');
const { emailValidate2, passwordValidate } = require('../middlewares/validations');

const router = Router();

router.post('/', emailValidate2, 
passwordValidate, loginUser);

module.exports = router; 
