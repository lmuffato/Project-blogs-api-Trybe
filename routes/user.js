const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createUser, getUsers } = require('../controllers');

router.post('/', createUser);
router.get('/', validateJWT, getUsers);

module.exports = router;