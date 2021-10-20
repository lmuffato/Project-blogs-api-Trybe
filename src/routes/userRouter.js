const { Router } = require('express');
const userController = require('../controllers/userController');
const { authToken } = require('../middlewares/authToken');
const newUserValidation = require('../middlewares/newUserValidation');

const router = Router();

router.post('/', newUserValidation, userController.createUser);
router.get('/', authToken, userController.getAll);

module.exports = router;