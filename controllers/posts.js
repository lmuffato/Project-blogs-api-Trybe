const { BlogPost, User, Category } = require('../models');
const HTTP_STATUS = require('../middlewares/httpStatus');

const create = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user;
  const newPost = await BlogPost.create({ title, content, userId });
  res.status(HTTP_STATUS.CREATED).json(newPost);
};

const getAll = async (_req, res) => {
  const posts = await BlogPost.findAll({
    // attributes: ['id', 'title', 'content', 'published', 'updated'],
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  res.status(HTTP_STATUS.OK).json(posts);
};

module.exports = {
  create,
  getAll,
};
