const PostServices = require('../services/PostServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const id = req.user;
  console.log('Id passando aqui:', id);
  const newPost = await PostServices.createPost(title, content, categoryIds, id);
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};