const PostService = require('../services/postService');

const createPosts = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const user = req.user.data;
    const { userId, id } = await PostService.createPosts(title, content, user);
    await PostService.createPostCategories(id, categoryIds);
    return res.status(201).json({ id, userId, title, content });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};

module.exports = {
  createPosts,
};