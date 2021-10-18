const express = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../auth/tokenValidation');

// const {
//   emailFormatValidation,
//   emailValidation,
//   displayNameValidation,
//   passwordValidation,
// } = require('../middlewares/inputValidatios');

const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', userValidation, userController.create);

router.get('/', validateToken, userController.getAllUsers);

router.get('/:id', validateToken, userController.getUserByID);

module.exports = router;