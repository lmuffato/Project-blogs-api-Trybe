const router = require('express').Router();
const loginController = require('../controllers/login');

// CREATE
router.post('/', loginController.login);

module.exports = router;
