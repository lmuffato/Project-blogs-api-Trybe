const express = require('express');
const { authToken } = require('../middlewares/authMiddleware');

const router = express.Router();

const { categoryController } = require('../controllers');

router.post('/', [authToken, categoryController.createCategory]);
router.get('/', [authToken, categoryController.getAllCategories]);

module.exports = router;
