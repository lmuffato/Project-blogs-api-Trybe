require('dotenv').config();
const PostService = require('../services/PostService');
const { validateToken } = require('../services/validations');
const { Users, BlogPosts, Categories } = require('../models');

const INTERNAL_ERROR = 'Algo deu errado';

const createPosts = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    const verifyTokenError = validateToken(token);
    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }
    const dataPost = await PostService.createPosts(title, content, categoryIds, token);
    if (dataPost.message) {
      return res.status(dataPost.numberStatus).json({ message: dataPost.message });
    }

    const { ID: id, userId } = dataPost;

    return res.status(201).json({ id, userId, title, content });
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const token = req.headers.authorization;

    const verifyTokenError = validateToken(token);
    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }
    const posts = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories, as: 'category', through: { attributes: [] } },
      ],
    });

    await Promise.all([posts]);

    console.log('aaaaaaaaaaaaaaaaaaaaa', posts);
    return res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

module.exports = {
  createPosts,
  getAllPosts,
};