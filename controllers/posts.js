const { BlogPost, User, Category } = require('../models');

const users = require('./users');

const {
    ok,
    created,
    notFound,
    badRequest,
    noContent,
    unauthorized,
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
  if (!idPost) return res.status(notFound).json(messages.postNotExist);
  return res.status(ok).json(idPost);
};

const update = async ({ id }, { title, content, categoryIds }, res) => {
  if (!title) { return res.status(badRequest).json(messages.noTitle); }
  if (!content) return res.status(badRequest).json(messages.noContent);
  if (categoryIds) return res.status(badRequest).json(messages.categoriesNotEdited);

  await BlogPost.update({ ...BlogPost, title, content }, { where: { id } });
  const updatedPost = await BlogPost.findByPk(id, 
  { 
    include: { model: Category, as: 'categories', through: { attributes: [] } },
  });
  return updatedPost;
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  // const token = req.headers.authorization;
  const postFound = await getById(id);
  const userId = users.getById(id);
  if (postFound !== userId) {
    return res.status(unauthorized).json(messages.unauthorized);
  }
  await BlogPost.destroy({ where: { id } });
  return res.status(noContent).end();
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
};