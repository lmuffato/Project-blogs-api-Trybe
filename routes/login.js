const router = require('express').Router();
const { UserController } = require('../controllers');

router.post('/', UserController.login);

module.exports = router;