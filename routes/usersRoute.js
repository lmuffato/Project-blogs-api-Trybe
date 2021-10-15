const { Router } = require('express');
const { addUser, getUser } = require('../controllers/userController');
const { validateEmail, validateName, validatePassword } = require('../middlewares/validateUsers');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/user', validateEmail, validateName, validatePassword, addUser);
router.get('/user', validateJWT, getUser);

module.exports = router;