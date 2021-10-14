const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addUsers,
  getUsers,
} = require('../Controllers/userController');

router.get('/', validateToken, getUsers);
router.post('/', addUsers);

module.exports = router;