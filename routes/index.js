const router = require('express').Router();

const login = require('./login');
const user = require('./user');

router.use('/user', user);
router.use('/login', login);

module.exports = router;