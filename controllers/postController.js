const jwt = require('jsonwebtoken');
const { BlogPost } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const create = async (req, res) => {
  const token = req.headers.authorization;
  const { userPayload: { id } } = jwt.verify(token, secret);
  req.userId = id;
  const { title, content } = req.body;
  const post = await BlogPost.create({ userId: id, title, content });
  res.status(201).json({ id: post.id,
    userId: post.userId,
    title: post.title,
    content: post.content });
};

const getAll = (_req, res, _next) => {
  BlogPost.findAll()
    .then((blogPosts) => {
      res.status(200).json(blogPosts);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

module.exports = {
  create,
  getAll,
};