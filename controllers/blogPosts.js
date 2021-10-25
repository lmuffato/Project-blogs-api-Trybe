const blogPostService = require('../services/blogPosts');

const createBlogPost = async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { user } = req;
  const createPost = await blogPostService
    .createBlogPost(title, categoryIds, content, user);
  const { published, updated, ...newPost } = createPost.dataValues;  
  res.status(201).json(newPost);
};

module.exports = {
  createBlogPost,
};