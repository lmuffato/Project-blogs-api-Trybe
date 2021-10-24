const { Router } = require('express');

const loginMiddleware = require('./loginMiddleware');
const loginValidation = require('./loginValidation');
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/',
loginValidation.passwordValidation,
loginValidation.emailValidation,
loginMiddleware.check,
authMiddleware.tokenGenerator,
async () => {});
/* REQUISIÇÃO:
http GET :3000/login/check email='MichaelSchumacher@gmail.com'
*/

module.exports = router;
