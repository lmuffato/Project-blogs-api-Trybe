const express = require('express');

const { userAuthentication } = require('../controllers/login');

const router = express.Router();

router.post('/', userAuthentication);

router.get('/', userAuthentication);

router.get('/:id', userAuthentication);

router.put('/:id', userAuthentication);

router.delete('/:id', userAuthentication);

module.exports = router;