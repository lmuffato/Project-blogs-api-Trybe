const router = require('express').Router();

const login = require('./login');
const user = require('./user');
const categories = require('./categories');
const post = require('./post');

router.use('/user', user);
router.use('/login', login);
router.use('/categories', categories);
router.use('/post', post);

module.exports = router;