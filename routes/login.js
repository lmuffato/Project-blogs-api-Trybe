const express = require('express');
const loginController = require('../controllers/loginController');

// const {
//   passwordValidation,
//   emailLoginValidation,
//   passwordLoginValidation,
// } = require('../middlewares/inputValidatios');

const loginValidation = require('../middlewares/loginValidation');

const router = express.Router();

router.post('/', loginValidation, 
  loginController);

module.exports = router;