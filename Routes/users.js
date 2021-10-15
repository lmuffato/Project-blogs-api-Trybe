const express = require('express');
const UserController = require('../Controllers/userController');

const { validateUser } = require('../Middlewares/user');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', validateUser, UserController.addNew);
router.get('/:id', auth, UserController.listById);
router.get('/', auth, UserController.listAll);
router.delete('/me', auth, UserController.exclude);

module.exports = router;