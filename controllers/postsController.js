const { createPostS, getAllPostsS, getPostS, updatePostS } = require('../services/postService');
const { findByEmailS } = require('../services/userService');

const createPostC = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user;
  const foundUser = await findByEmailS(email);
  const { id: userId } = foundUser;
  const newPost = await createPostS({ title, content, categoryIds, userId });
  if (!newPost) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return res.status(201).json(newPost);
};

const getAllPostsC = async (req, res) => {
  const posts = await getAllPostsS();
  if (!posts) {
    return res.status(404).json({ message: 'No posts found' });
  }

  return res.status(200).json(posts);
};

const getPostC = async (req, res) => {
  const { id } = req.params;
  const post = await getPostS(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const updatePostC = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { email } = req.user;
  const foundUser = await findByEmailS(email);
  const { id: userId } = foundUser; // userId vindo do token
  const updatePostData = { userId, title, content, id };
  const updated = await updatePostS(updatePostData);
  if (!updated) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  return res.status(200).json(updated);
};
module.exports = {
  createPostC,
  getAllPostsC,
  getPostC,
  updatePostC,
};