const { BlogPost, User, Category } = require('../models');
require('dotenv').config();

const getAll = async (req, res) => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(posts);
};

const create = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;
  
  const { id } = await User.findOne({ where: { email } });

  const newPost = await BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });

  return res.status(201).json(newPost);
};

module.exports = {
  create,
  getAll,
};
