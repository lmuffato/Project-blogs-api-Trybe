const { BlogPost } = require('../models');

const postServices = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { message, post } = await postServices.create(title, content, categoryIds, id);
  console.log('mensagem', message);
  console.log('post', post);
  if (post !== undefined) {
    return res.status(201).json(post);
  }
  return res.status(400).json({ message });
};

const getAll = async (_req, res) => {
  try {
    const posts = await BlogPost.findAll();
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { create, getAll };