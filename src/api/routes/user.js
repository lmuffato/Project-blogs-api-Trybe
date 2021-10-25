const express = require('express');
const {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
} = require('../../controllers/User');
const checkExistsUserOnCreate = require('../../middlewares/checkExistsUserOnCreate');
const fieldsValidation = require('../../middlewares/fieldsValidation');
const validate = require('../../schemas/validate');
const auth = require('../../middlewares/auth');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(auth, getAllUsers)
  .post(
    validate.createUser(),
    fieldsValidation,
    checkExistsUserOnCreate,
    createUser,
  );

userRouter.route('/:id').get(auth, getUserById);

userRouter.route('/me').delete(auth, deleteUser);

module.exports = userRouter;
