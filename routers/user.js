const express = require('express');

const { create, getAll, deleteById, findById } = require('../controllers/user');

const { userAuthentication } = require('../controllers/login');

const router = express.Router();

router.post('/', create);

router.get('/', userAuthentication, getAll);

router.get('/:id', userAuthentication, findById);

router.delete('/me', userAuthentication, deleteById);

module.exports = router;