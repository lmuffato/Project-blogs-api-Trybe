const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const middlewares = require('../middlewares/middlewares');
const auth = require('../middlewares/auth');

const router = Router();

router.post('/', auth.tokenAuth,
middlewares.categoryValidation,
  categoriesController.create);

router.get('/', auth.tokenAuth,
categoriesController.getAll);

module.exports = router; 
