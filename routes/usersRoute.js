const { Router } = require('express');
const { addUser } = require('../controllers/userController');
const { validateEmail, validateName, validatePassword } = require('../middlewares/validateUsers');

const router = Router();

router.post('/user', validateEmail, validateName, validatePassword, addUser);

module.exports = router;