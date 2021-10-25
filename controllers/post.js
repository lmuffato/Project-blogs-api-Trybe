const { Post } = require('../services');
const { SUCCESS_CREATED } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;
  const postData = { title, content, categoryIds, userId };
  Post.create(postData)
    .then((result) => res.status(SUCCESS_CREATED).json(result))
    .catch((err) => next(err));
};

module.exports = {
  create,
};