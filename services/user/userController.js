const { Router } = require('express');

const userMiddleware = require('./userMiddleware'); 
const userValidation = require('./userValidation');
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/:id',
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
userMiddleware.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3000/users/1
*/

router.put('/:id',
userMiddleware.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3000/users/3 displayName='Lucas' email='lucas@gmail.com' password='Senha123' image='www.google.com'
*/

router.delete('/:id',
userMiddleware.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3000/users/4
*/

router.get('/',
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
userMiddleware.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3000/users
*/

router.post('/',
userValidation.nameValidation,
userValidation.passwordValidation,
userValidation.emailValidation,
userValidation.emailAlreadyExists,
userMiddleware.createNew,
authMiddleware.tokenGenerator,
async () => {});
/* REQUISIÇÃO:
http POST :3000/users displayName='LucasMuffato' email='lucas@gmail.com' password='lucas123456' image='lucas'
http POST :3000/users displayName='Lucas' email='lucas' password='lucas' image='lucas'
*/

module.exports = router;
