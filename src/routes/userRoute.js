const { Router } = require('express');

const router = Router();

const {
  addUsers,
} = require('../Controllers/userController');

router.post('/', addUsers);

module.exports = router;