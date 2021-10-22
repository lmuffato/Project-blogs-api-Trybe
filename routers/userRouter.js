const { Router } = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares/middlewares');

const router = Router();

router.post('/', middlewares.nameLengthValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  userController.create);
router.get('/', userController.getAll);

module.exports = router; 
