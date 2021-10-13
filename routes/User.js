const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/', controller.createUser);

module.exports = router;