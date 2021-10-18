const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const { authToken } = require('../middlewares/authMiddleware');

router.post('/', [userController.createUser]);

router.get('/', [authToken, userController.getAll]);

router.get('/:id', [authToken, userController.getById]);

module.exports = router;
