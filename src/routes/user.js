const express = require('express');

const router = express.Router();

const {
  CreateUserController,
  GetUsersController,
  GetUserByIdController,
  DeleteUserController,
} = require('../controllers/user');

const authToken = require('../middlewares/authToken');
const authUser = require('../middlewares/user/authUser');

router.post('/', authUser, CreateUserController.handle);

router.get('/', authToken, GetUsersController.handle);

router.get('/:id', authToken, GetUserByIdController.handle);

router.delete('/me', authToken, DeleteUserController.handle);

module.exports = router;
