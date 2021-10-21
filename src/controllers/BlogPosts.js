const BlogPosts = require('../services/BlogPosts');
const { notFoundPost } = require('../utils/errors');

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
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPosts.getPostById(id);

    if (!post) {
      return res
        .status(notFoundPost.code)
        .json({ message: notFoundPost.message });
    }

    return res.status(200).json(post);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await BlogPosts.getPostById(id);

    if (!post) {
      return res
        .status(notFoundPost.code)
        .json({ message: notFoundPost.message });
    }

    const updatedId = await BlogPosts.updatePost({ title, content }, id);

    const updatedPost = await BlogPosts.getPostById(updatedId);

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = { createPost, getAllPosts, getPost, updatePost };
