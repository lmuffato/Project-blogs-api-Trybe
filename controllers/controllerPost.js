const servicePost = require('../services/servicePost');

const createPost = async (req, res) => {
  const dataPost = req.body;
  const { email } = req.user;

  const { status, data } = await servicePost.createPost(dataPost, email);
  return res.status(status).json(data);
};

module.exports = {
  createPost,
};