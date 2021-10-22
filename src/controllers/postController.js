const { StatusCodes: { CREATED, INTERNAL_SERVER_ERROR, OK } } = require('http-status-codes');
const { create, getAllPosts, getPostById, updateASinglePost } = require('../services/postService');

const createNewPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user.data;

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

const getSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singlePost = await getPostById(id);
    return res.status(OK).json(singlePost);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const postUpdate = await updateASinglePost(id, { title, content });
    return res.status(OK).json(postUpdate);
  } catch (e) {
    next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
  }
};

module.exports = {
  createNewPost,
  getPosts,
  getSinglePost,
  updatePost,
};