const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');

const { validateCategory } = require('../middlewares/categoryValidation');
const categoriesController = require('../controllers/categoriesController');

const router = Router();

router.post(
  '/',
  validateCategory,
  validateJWT,
  categoriesController.create,
);

router.get(
  '/',
  validateJWT,
  categoriesController.getAll,
);

module.exports = router;