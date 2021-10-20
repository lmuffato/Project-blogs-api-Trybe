const postService = require('../services/postService');
const { BlogPosts } = require('../models');
const { HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../helpers');

const createdPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const created = await postService.createBlogPost(title, content, categoryIds);
  if (created) {
    return res.status(created.status).json(created.message);
  }
  const { dataValues } = await BlogPosts.create({ title, content, categoryIds });
  res.status(HTTP_CREATED_STATUS).json({ ...dataValues, userId: id });
};

const getAllPosts = async (req, res) => {
  const get = await postService.getAll();
  res.status(HTTP_OK_STATUS).json(get);
};

module.exports = {
  createdPost,
  getAllPosts,
};