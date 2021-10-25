// const rescue = require('express-rescue');
const { Router } = require('express');
const { createUserC } = require('../controllers/userController');
const {
  verifyDiplayName,
  verifyEmail,
  verifyLengthPass,
  verifyEmailExists,
} = require('../middlewares/userMiddlewares');

// const { verifyToken } = require('../middlewares/loginMiddlewares');

const router = Router();

router.post('/', verifyDiplayName,
verifyEmail,
verifyLengthPass,
verifyEmailExists,
createUserC);

// router.get('/', verifyToken, getUsersC);

module.exports = router;