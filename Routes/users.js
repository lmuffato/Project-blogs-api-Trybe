const express = require('express');
const UserController = require('../Controllers/userController');

const { validateUser } = require('../Middlewares/user');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', validateUser, UserController.addNew);
router.get('/', auth, UserController.listAll);
router.get('/:id', auth, UserController.listById);

module.exports = router;
