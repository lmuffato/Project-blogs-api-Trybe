const { Router } = require('express');
const { createUserC } = require('../controllers/userController');
const {
  verifyDiplayName,
  verifyEmail,
  verifyLengthPass,
  verifyEmailExists,
} = require('../middlewares/userMiddlewares');

const router = Router();

router.post('/', verifyDiplayName,
verifyEmail,
verifyLengthPass,
verifyEmailExists,
createUserC);

module.exports = router;