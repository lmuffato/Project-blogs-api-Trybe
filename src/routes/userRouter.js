const { Router } = require('express');
const userController = require('../controllers/userController');
const newUserValidation = require('../middlewares/newUserValidation');

const router = Router();

router.post('/', newUserValidation, userController.createUser);

module.exports = router;