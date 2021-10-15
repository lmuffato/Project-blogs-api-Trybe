const express = require('express');
const categoryController = require('../controllers/categoryController');
const validateToken = require('../auth/tokenValidation');

const {
  categoryNameValidation,
} = require('../middlewares/inputValidatios');

const router = express.Router();

router.post('/', validateToken, categoryNameValidation, categoryController.create);

module.exports = router;