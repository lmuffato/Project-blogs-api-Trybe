const { Router } = require('express');
const login = require('../controllers/loginController');
const { validateEmail, validatePassword } = require('../middlewares/validateUsers');

const router = Router();

router.post('/login', validateEmail, validatePassword, login);

module.exports = router;