const { postServices } = require('../services');
const { status } = require('../messages');

const createPost = async (req, res) => {
  const post = req.body;
  const userId = req.user.id; 
  const create = await postServices.createPost(post, userId);
  return res.status(status.created).json(create);
};

module.exports = { createPost };
