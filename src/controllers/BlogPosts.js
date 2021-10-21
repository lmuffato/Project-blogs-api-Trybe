const BlogPosts = require('../services/BlogPosts');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id: userId } = req.user;

    const currentDate = new Date();

    const post = await BlogPosts.createPost({
      title,
      categoryIds,
      content,
      userId,
      published: currentDate,
      updated: currentDate,
    });
    const { published, updated, ...rest } = post;
    return res.status(201).json(rest);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await BlogPosts.getAllPosts();
    console.log(posts);
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createPost, getAllPosts };
