const { create, getAllPosts, getPostById } = require('../services/postService');

const createNewPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user.data.dataValues;

    const userId = id; 
    const rawNewPost = await create({ title, content, userId });
    const { updated, published, ...newPost } = rawNewPost.dataValues;
    return res.status(201).json(newPost);
  } catch (e) {
    next({ statusCode: 400, message: e.message });
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const allPosts = await getAllPosts();
    return res.status(200).json(allPosts);
  } catch (e) {
    next({ statusCode: 400, message: e.message });
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const singlePost = await getPostById(id);
    return res.status(200).json(singlePost);
  } catch (e) {
    next({ statusCode: 400, message: e.message });
  }
};

module.exports = {
  createNewPost,
  getPosts,
  getSinglePost,
};