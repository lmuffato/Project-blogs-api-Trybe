const { postServices } = require('../services');
const { status } = require('../messages');

const createPost = async (req, res) => {
  const post = req.body;
  const userId = req.user.id; 
  const create = await postServices.createPost(post, userId);
  return res.status(status.created).json(create);
};

const getPosts = async (_req, res) => {
  const getAll = await postServices.getPosts();
  return res.status(status.OK).json(getAll);
};

module.exports = {
  createPost,
  getPosts,
};
