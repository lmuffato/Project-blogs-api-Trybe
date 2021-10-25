const { Router } = require('express');

const categoryMiddleware = require('./categoryMiddleware');
const categoryValidation = require('./categoryValidation');
const authMiddleware = require('../authentication/authMiddleware');

const router = Router();

router.get('/',
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
categoryMiddleware.getAll,
async () => {});
/* REQUISIÇÃO:
http GET :3000/categories
*/

router.post('/',
categoryValidation.verifyInputs,
authMiddleware.verifyEmptyToken,
authMiddleware.tokenValidation,
categoryMiddleware.createNew,
async () => {});
/* REQUISIÇÃO:
http POST :3000/categories name='ciencia'
*/

router.get('/:id',
categoryMiddleware.getById,
async () => {});
/* REQUISIÇÃO:
http GET :3000/categories
*/

router.put('/:id',
categoryMiddleware.updateById,
async () => {});
/* REQUISIÇÃO:
http PUT :3000/categories/2 name='ciencia'
*/

router.delete('/:id',
categoryMiddleware.deleteById,
async () => {});
/* REQUISIÇÃO:
http DELETE :3000/categories/4
*/

module.exports = router;
