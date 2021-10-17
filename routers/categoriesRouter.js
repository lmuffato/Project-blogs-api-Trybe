const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const categoriesController = require('../controllers/categoriesController');

const router = Router();

router.post(
  '/',
  validateJWT,
  categoriesController.create,
);

module.exports = router;