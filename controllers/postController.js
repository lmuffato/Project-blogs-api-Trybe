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

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postServices.getPostById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};