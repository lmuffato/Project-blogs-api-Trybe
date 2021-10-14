const { Router } = require('express');

const router = Router();

const {
  userLogin,
} = require('../Controllers/loginController');

router.post('/', userLogin);

module.exports = router;