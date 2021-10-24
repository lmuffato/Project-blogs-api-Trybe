const BlogPostService = require('../../services/post');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user.dataValues;

  const newBlogPost = await BlogPostService.createPost({ title, content, categoryIds, userId });

  if (!newBlogPost) {
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }

  return res.status(201).json(newBlogPost);
};

module.exports = createPost;