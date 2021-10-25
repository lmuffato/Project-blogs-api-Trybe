const { User } = require('../services');
const { SUCCESS_CREATED } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const userData = { displayName, email, password, image };
  User.create(userData)
    .then((result) => res.status(SUCCESS_CREATED).json(result))
    .catch((err) => next(err));
};

module.exports = {
  create,
};