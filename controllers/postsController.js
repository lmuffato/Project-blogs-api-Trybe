const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const { verify } = require('../auth/tokenAuth');
const { findUser } = require('./usersController');
const { error18, error20 } = require('../utils/errors');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const userEmail = payload.email;
  const userData = await findUser(userEmail);
  const userId = userData.id;
    
  const category = await BlogPost.create({ title, content, categoryIds, userId });
  const { id } = category;

  const post = { id, userId, title, content };
    
  res.status(201).json(post);
};

const getPosts = async (_req, res) => {
  BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Deu ruim' });
    });
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });

   if (result === null) {
    return res.status(error18.error.status).json({ message: error18.error.message });
   } return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const userEmail = payload.email;
  const userData = await findUser(userEmail);
  const result = await BlogPost.findByPk(id, { atributes: ['userId'] });
  if (userData.id !== result.userId) {
    return res.status(error20.error.status).json({ message: error20.error.message });
  } if (result === null) {
    return res.status(error18.error.status).json({ message: error18.error.message });
  } 
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost.findByPk(id, { include: 
    { model: Category, as: 'categories', through: { attributes: [] } } });
  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const userEmail = payload.email;
  const userData = await findUser(userEmail);
  const result = await BlogPost.findByPk(id, { atributes: ['userId'] });
  if (result === null) {
    return res.status(error18.error.status).json({ message: error18.error.message });
  } if (userData.id !== result.userId) {
    return res.status(error20.error.status).json({ message: error20.error.message });
  }
  await BlogPost.destroy({ where: { id } });
  return res.status(204).json();
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  if (!q) {
    const allPosts = await BlogPost.findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }] });
    return res.status(200).json(allPosts);
  }
  const test = await BlogPost.findAll({ where: { [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } }] },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
    
  if (test === null) {
    return res.status(200).json([]);
  } return res.status(200).json(test);
};

module.exports = {
  create,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  searchPost,
};