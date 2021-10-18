const postsServices = require('../services/postsServices');

const createPosts = async (req, res) => {
  const post = await postsServices.createPosts(req.body);
  if (post === 'dont exist') {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  return res.status(201).json(post);
};

const getPosts = async (_req, res) => {
  const posts = await postsServices.getPosts();

  return res.status(200).json(posts);
};

module.exports = { createPosts, getPosts };
