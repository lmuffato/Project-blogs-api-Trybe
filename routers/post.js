const express = require('express');

const { userAuthentication } = require('../controllers/login');

const {
  create,
  getAll,
  findById,
  update,
  deleteById,
  findByQuery } = require('../controllers/post');

const router = express.Router();

router.post('/', userAuthentication, create);

router.get('/', userAuthentication, getAll);

router.get('/search', userAuthentication, findByQuery);

router.get('/:id', userAuthentication, findById);

router.put('/:id', userAuthentication, update);

router.delete('/:id', userAuthentication, deleteById);

module.exports = router;