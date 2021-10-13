const { postServices } = require('../services');

const createPost = async (req, res) => {
  try {
    const newPost = await postServices.createPost(req);
    
    return res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createPost,
};