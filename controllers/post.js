const { BlogPost, User, Category } = require('../models');

const postServices = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const { message, post } = await postServices.create(title, content, categoryIds, id);
  if (post !== undefined) {
    return res.status(201).json(post);
  }
  return res.status(400).json({ message });
};

const getAll = async (_req, res) => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { 
          model: Category, 
          as: 'categories', 
          attributes: ['id', 'name'], 
        },
      ],
    });
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories', attributes: ['id', 'name'] },
      ],
    });
    if (post === null) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { create, getAll, findById };