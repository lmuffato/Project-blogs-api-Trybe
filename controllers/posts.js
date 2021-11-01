const { BlogPost, User, Category } = require('../models');

const {
    ok,
    created,
    notFound,
} = require('../utils/anwers');

const messages = require('../utils/messages');

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
  const { id } = req.params;
  const idPost = await BlogPost.findOne({
      where: { id },
      include: [
        {
          model: User, as: 'user', attributes: { exclude: ['password'] },
        },
        {
          model: Category, as: 'categories', through: { attributes: [] },
        },
      ],
    });
    console.log(idPost);
  if (!idPost) return res.status(notFound).json(messages.postNotExist);
  return res.status(ok).json(idPost);
};

module.exports = {
  create,
  getAll,
  getById,
};