const router = require('express').Router();
const { authToken } = require('../middlewares/authToken');
const Categories = require('../controllers/categories');

router.post('/', authToken, Categories.create);
router.get('/', authToken, Categories.getAll);

module.exports = router;