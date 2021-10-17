const blogService = require('../services/blogService');

const blogPost = async (req, res) => {
  try {
    const userId = req.user.user.id;
    console.log(userId, 'acima da função');
    const blog = await blogService.blogPost(userId, req.body);
    console.log(userId, 'userId');
    if (blog.message) return res.status(blog.code).json({ message: blog.message });
    res.status(201).json(blog);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const blog = await blogService.getAllPosts();
    return res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogService.getById(id);
    if (!blog) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(blog);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { blogPost, getAllPosts, getById };
