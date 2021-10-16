const { Router } = require('express');
const login = require('../controllers/loginController');
const { validateLoginEmail, validatePassword } = require('../middlewares/validateUsers');

const router = Router();

router.post('/login', validateLoginEmail, validatePassword, login);

module.exports = router;