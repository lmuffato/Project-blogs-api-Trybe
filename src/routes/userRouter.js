const { Router } = require('express');
const { createNewUser, getEveryone } = require('../controllers');
const { validUser, Auth } = require('../middlewares');

const router = Router();
router.post('/', validUser, createNewUser);
router.get('/', Auth, getEveryone);

module.exports = router;