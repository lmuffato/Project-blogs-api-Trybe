const { postServices } = require('../services');

const createPost = async (req, res) => {
  try {
    const newPost = await postServices.createPost(req);
    
    return res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postServices.getAllPosts();
    
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPost,
  getAllPosts,
};