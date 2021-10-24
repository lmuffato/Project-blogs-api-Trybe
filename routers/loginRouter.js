const { Router } = require('express');
const auth = require('../middlewares/auth');
const middlewares = require('../middlewares/middlewares');

const router = Router();

router.post('/', middlewares.passwordLoginValidation,
  middlewares.emailLoginValidation,
  auth.createToken);

module.exports = router;
