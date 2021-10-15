const PostServices = require('../services/PostServices');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const id = req.user;
  const newPost = await PostServices.createPost(title, content, categoryIds, id);
  return res.status(201).json(newPost);
};

const listAllPosts = async (_req, res) => {
  const allPosts = await PostServices.listAllPosts();
  /*
  const { userId } = allPosts;
  const findUser = await PostServices.findUser(userId);
  */
  return res.status(200).json(allPosts);
};

module.exports = {
  createPost,
  listAllPosts,
};