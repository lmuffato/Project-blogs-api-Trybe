const blogPostService = require('../services/blogPosts');

const createBlogPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { user } = req;
  const createPost = await blogPostService
    .createBlogPost(title, categoryIds, content, user);
  const { published, updated, ...newPost } = createPost.dataValues;  
  res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
  const allPosts = await blogPostService.getAllPosts();
  res.status(200).json(allPosts);
};

module.exports = {
  createBlogPost,
  getAllPosts,
};