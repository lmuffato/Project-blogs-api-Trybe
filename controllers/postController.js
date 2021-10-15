const postService = require('../services/postService');

const createPost = async (req, res) => {
  const data = req.body;
  const id = req.user;
  console.log('id aqui mermão', id);
  const { status, message, blogpost } = await postService.createPost(data, id);
  return res.status(status).json(message ? { message } : (blogpost));
};

module.exports = { createPost };