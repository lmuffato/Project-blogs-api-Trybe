const { Router } = require('express');
const { createNewUser } = require('../controllers');
const { validUser } = require('../middlewares');

const router = Router();
router.post('/', validUser, createNewUser);

module.exports = router;