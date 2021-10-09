const express = require('express');

const router = express.Router();

const authLogin = require('../middlewares/login/authLogin');

const { LoginController } = require('../controllers/login');

router.post('/', authLogin, LoginController.handle);

module.exports = router;
