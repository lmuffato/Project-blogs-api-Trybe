const { Router } = require('express');

const loginMiddleware = require('./loginMiddleware');
const loginValidation = require('./loginValidation');
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.post('/',
loginValidation.passwordValidation,
loginValidation.emailValidation,
loginMiddleware.verifyUserAndPasswordInDataBase,
authMiddleware.tokenGenerator,
async () => {});
/* REQUISIÇÃO:
http POST :3000/login/ email='MichaelSchumacher@gmail.com'
*/

module.exports = router;
