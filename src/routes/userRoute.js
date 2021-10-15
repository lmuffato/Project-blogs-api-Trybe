const { Router } = require('express');
const validateToken = require('../auth/validateToken');

const router = Router();

const {
  addUsers,
  getUsers,
  getUserById,
} = require('../Controllers/userController');

router.get('/', validateToken, getUsers);
router.get('/:id', validateToken, getUserById);
router.post('/', addUsers);

module.exports = router;