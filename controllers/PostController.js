require('dotenv').config();
const PostService = require('../services/PostService');
const { validateToken } = require('../services/validations');
// const { Categories } = require('../models');

const INTERNAL_ERROR = 'Algo deu errado';

const createPosts = async (req, res) => {
  console.log('oi');
  try {
    const { title, content, categoryIds } = req.body;
    const token = req.headers.authorization;

    const verifyTokenError = validateToken(token);
    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }
    const dataPost = await PostService.createPosts(title, content, categoryIds, token);
    if (dataPost.message) {
      console.log(dataPost);
      return res.status(dataPost.numberStatus).json({ message: dataPost.message });
    }

    const { ID: id, userId } = dataPost;

    return res.status(201).json({ id, userId, title, content });
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

module.exports = {
  createPosts,
};