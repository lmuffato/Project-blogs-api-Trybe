const router = require('express').Router();
const userController = require('../controllers/user');

// CREATE
router.post('/', userController.createUser);

// READ
router.get('/', userController.getUsers);

module.exports = router;
