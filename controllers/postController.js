const rescue = require('express-rescue');
const postServices = require('../services/postServices');
const authServices = require('../services/auth');

const createPost = rescue(async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === '') return res.status(401).json({ message: 'Token not found' });
  const blogPost = req.body;
    const result = await postServices.createPost(blogPost, authorization);
    if (result.status) return next(result);
    res.status(201).json(result);
});

const getAllPosts = rescue(async (req, res, next) => {
  const { authorization } = req.headers;
  const loggedIn = await authServices.validateJWT(authorization);
  if (loggedIn) {
    const result = await postServices.getAllPosts();
    if (result.status) return next(result);
    res.status(200).json(result);
  }
});

module.exports = {
  createPost,
  getAllPosts,
};  