const { BlogPost, User, Category } = require('../models');

const {
    ok,
    created,
    notFound,
} = require('../utils/anwers');

const {
  postNotExist,
  notFound,
  
} = require('../utils/messages');

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

const getById = async (req, res) => {
  const { userId } = req.body;
  const idPost = await BlogPost.findOne({
      where: { userId },
      include: [
        {
          model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories', through: { attributes: [] },
        },
      ],
    });
  if (!idPost) return res.status(notFound).json(postNotExist);
  return res.status(ok).json(idPost);
};

module.exports = {
  create,
  getAll,
  getById,
};