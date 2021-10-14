const postService = require('../services/postService');
const STATUS = require('../util/status');

const create = async (req, res, next) => {
  try {
    const { body: { title, content }, userId } = req;
    const created = await postService.create(title, content, userId);
    return res.status(STATUS.STATUS_201_CREATED).json(created);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const posts = await postService.getAll();
    return res.status(STATUS.STATUS_200_OK).json(posts);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};
