const router = require('express').Router();

const { User } = require('../controllers');
const { validateUserData } = require('../middlewares');

router.post('/', validateUserData, User.create);

module.exports = router;