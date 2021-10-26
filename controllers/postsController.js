const { createPostS } = require('../services/postService');
const { User } = require('../models');

const createPostC = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user;
  const foundUser = await User.findOne({ where: { email } });
  const { id: userId } = foundUser;
  const newPost = await createPostS({ title, content, categoryIds, userId });
  if (!newPost) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return res.status(201).json(newPost);
};

module.exports = {
  createPostC,
};