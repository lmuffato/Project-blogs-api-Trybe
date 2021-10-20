const BlogPosts = require('../services/BlogPosts');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id: userId } = req.user;

    const currentDate = new Date();

    const { id } = await BlogPosts.createPost({
      title,
      categoryIds,
      content,
      userId,
      published: currentDate,
      updated: currentDate,
    });
    const { published, updated, ...rest } = await BlogPosts.getPostById(id);
    return res.status(201).json(rest);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createPost };
