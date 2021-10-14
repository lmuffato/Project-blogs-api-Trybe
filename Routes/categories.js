const express = require('express');
const categoriyController = require('../Controllers/categoryController');

const { validateCategory } = require('../Middlewares/category');

const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', auth, validateCategory, categoriyController.addNew);
router.get('/', auth, categoriyController.listAll);

module.exports = router;
