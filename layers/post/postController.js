const { Router } = require('express');

const postMiddleware = require('./postMiddleware'); 
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/',
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
postMiddleware.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3000/post
*/

router.post('/',
postMiddleware.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3000/post title='meu titulo' content='meu texto'
*/

router.get('/:id',
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
postMiddleware.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3000/post
*/

router.put('/:id',
postMiddleware.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3000/post/2 title='meu titulo' content='meu texto'
*/

router.delete('/:id',
postMiddleware.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3000/post/4
*/

module.exports = router;
