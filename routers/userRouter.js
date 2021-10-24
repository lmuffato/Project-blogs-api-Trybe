const { Router } = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares/middlewares');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/', middlewares.nameLengthValidation,
  middlewares.emailValidation,
  middlewares.passwordValidation,
  userController.create);

router.get('/', auth.tokenAuth,
userController.getAll);

router.get('/:id', auth.tokenAuth, userController.getById);

module.exports = router; 
