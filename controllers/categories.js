const { Categories } = require('../services');
const { SUCCESS_CREATED, SUCCESS_OK } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { name } = req.body;
  Categories.create(name)
    .then((result) => res.status(SUCCESS_CREATED).json(result))
    .catch((err) => next(err));
};

const getAll = (_req, res, next) => { 
  Categories.getAll()
    .then((result) => res.status(SUCCESS_OK).json(result))
    .catch((err) => next(err));
};

module.exports = {
  create,
  getAll,
};