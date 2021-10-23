const { Router } = require('express');

const loginMiddleware = require('./loginMiddleware'); 
// const usersValidation = require('./usersValidation');

const router = Router();

router.get('/check',
loginMiddleware.check,
async () => {});
/* REQUISIÇÃO:
http GET :3000/login/check email='MichaelSchumacher@gmail.com'
*/

router.get('/',
loginMiddleware.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3000/login
*/

router.get('/:id',
loginMiddleware.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3000/login/1
*/

module.exports = router;
