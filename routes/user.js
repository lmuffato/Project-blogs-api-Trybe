const express = require('express');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

const { createUser, getUsers, getUserById } = require('../controllers');

router.post('/', createUser);
router.get('/', validateJWT, getUsers);
router.get('/:id', validateJWT, getUserById);

module.exports = router;