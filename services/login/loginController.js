const { Router } = require('express');

const loginMiddleware = require('./loginMiddleware'); 
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/',
loginMiddleware.check,
authMiddleware.tokenGenerator,
async () => {});
/* REQUISIÇÃO:
http GET :3000/login/check email='MichaelSchumacher@gmail.com'
*/

module.exports = router;
