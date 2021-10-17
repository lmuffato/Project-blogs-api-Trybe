const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const categoriesController = require('../controllers/categoriesController');

const router = Router();

router.post(
  '/',
  validateJWT,
  categoriesController.create,
);

router.get(
  '/',
  validateJWT,
  categoriesController.getAll,
);

module.exports = router;