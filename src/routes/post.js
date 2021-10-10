const router = require('express').Router();
const { authToken } = require('../middlewares/authToken');
const Posts = require('../controllers/posts');

router.post('/', authToken, Posts.create);
router.get('/search', authToken, Posts.getQueryParams);
router.get('/', authToken, Posts.getAll);
router.get('/:id', authToken, Posts.getById);
router.put('/:id', authToken, Posts.update);
router.delete('/:id', authToken, Posts.remove);

module.exports = router;