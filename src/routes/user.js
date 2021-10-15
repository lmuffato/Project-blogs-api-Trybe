const router = require('express').Router();
const userController = require('../controllers/user');

// CREATE
router.post('/', userController.createUser);

// READ
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
