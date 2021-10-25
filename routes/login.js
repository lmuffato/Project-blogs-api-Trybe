const { Router } = require('express');
const { loginUserC } = require('../controllers/loginController');

const {
  verifyCredentialsLogin,
} = require('../middlewares/loginMiddlewares');

const router = Router();

router.post('/', verifyCredentialsLogin, loginUserC);

module.exports = router;
