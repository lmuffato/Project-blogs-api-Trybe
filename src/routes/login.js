const router = require('express').Router();
const Login = require('../controllers/login');

router.post('/', Login.userLogin);

module.exports = router;