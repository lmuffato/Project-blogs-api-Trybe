const { StatusCodes: { CREATED, INTERNAL_SERVER_ERROR, OK } } = require('http-status-codes');
const { create, getAllPosts } = require('../services/postService');

const createNewPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user.data.dataValues;

    const userId = id; 
    const rawNewPost = await create({ title, content, userId });
    const { updated, published, ...newPost } = rawNewPost.dataValues;
    return res.status(CREATED).json(newPost);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const allPosts = await getAllPosts();
    return res.status(OK).json(allPosts);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

module.exports = {
  createNewPost,
  getPosts,
};