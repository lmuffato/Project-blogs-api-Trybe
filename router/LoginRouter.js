const { Router } = require('express');
const usersController = require('../controllers/usersController');
const { loginValidator } = require('../utils/middlewares');

const router = Router();

router.post('/', loginValidator,
usersController.login);

module.exports = router;