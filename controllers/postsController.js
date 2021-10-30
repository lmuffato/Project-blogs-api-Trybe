const { createPostS, getAllPostsS } = require('../services/postService');
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

module.exports = {
  createPostC,
  getAllPostsC,
};