const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');
const { middlewaresUser } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresUser.validateUser, rescue(userControllers.createUser));
router.get('/', middlewaresUser.validateToken, rescue(userControllers.getUsers));
router.get('/:id', rescue(userControllers.getUser));

module.exports = router;
