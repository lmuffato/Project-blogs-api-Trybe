const express = require('express');

const { userAuthentication } = require('../controllers/login');

const { create, getAll, findById } = require('../controllers/post');

const router = express.Router();

router.post('/', userAuthentication, create);

router.get('/', userAuthentication, getAll);

router.get('/:id', userAuthentication, findById);

router.put('/:id', userAuthentication);

router.delete('/:id', userAuthentication);

module.exports = router;