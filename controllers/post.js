const { Post } = require('../services');
const { SUCCESS_CREATED, SUCCESS_OK } = require('../utils/statusCode');

const create = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;
  const postData = { title, content, categoryIds, userId };
  Post.create(postData)
    .then((result) => res.status(SUCCESS_CREATED).json(result))
    .catch((err) => next(err));
};

const getAll = (req, res, next) => {
  Post.getAll()
    .then((result) => res.status(SUCCESS_OK).json(result))
    .catch((err) => next(err));
};

const getById = (req, res, next) => {
  const { id } = req.params;

  Post.getById(id)
    .then((result) => res.status(SUCCESS_OK).json(result))
    .catch((err) => next(err));
};

const update = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  
  const data = { id, title, content };
  await Post.update(data);
  Post.getById(id)
      .then((result) => res.status(SUCCESS_OK).json(result))
      .catch((err) => next(err));
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};