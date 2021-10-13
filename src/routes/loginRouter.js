const { Router } = require('express');
const { loginUser } = require('../controllers');
const { login } = require('../middlewares');

const router = Router();
router.post('/', login, loginUser);

module.exports = router;