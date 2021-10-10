const router = require('express').Router();
const { authToken } = require('../middlewares/authToken');
const Users = require('../controllers/users');

router.post('/', Users.create);
router.get('/', authToken, Users.getAll);
router.get('/:id', authToken, Users.getById);
router.delete('/me', authToken, Users.remove);

module.exports = router;