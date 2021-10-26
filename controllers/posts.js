const { BlogPost, User, Category } = require('../models');

const {
    ok,
    created,
} = require('../utils/anwers');

const create = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user;
  const createdPost = await BlogPost.create({ title, content, userId });
  return res.status(created).json(createdPost);
};

const getAll = async (_req, res) => {
  const allPosts = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return res.status(ok).json(allPosts);
};

module.exports = {
  create,
  getAll,
};