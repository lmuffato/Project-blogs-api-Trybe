const express = require('express');
const categoryController = require('../controllers/categoryController');
const validateToken = require('../auth/tokenValidation');

// const {
//   categoryNameValidation,
// } = require('../middlewares/inputValidatios');

const categoryValidation = require('../middlewares/categoriesValidation');

const router = express.Router();

router.post('/', validateToken, categoryValidation, categoryController.create);
router.get('/', validateToken, categoryController.getAllCategories);
module.exports = router;